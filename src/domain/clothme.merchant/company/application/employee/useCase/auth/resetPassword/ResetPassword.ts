import Guid from "../../../../../../../clothme.shared.kernel/domain/entity/Guid";
import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IAuthRepository } from "../../../../../domain/repository/auth/IAuthRepository";
import { left, Result, right } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { ResetPasswordDTO } from "./ResetPasswordDTO";
import { ResetPasswordResponse, ResetPasswordResponseDTO } from "./ResetPasswordResponse";
import { EmployeeId } from "../../../../../domain/value_object/employee/EmployeeId";
import { EmployeeEmail } from "../../../../../domain/value_object/employee/EmployeeEmail";
import { EmployeePassword } from "../../../../../domain/value_object/employee/EmployeePassword";
import { SamePassword } from "./ResetPasswordError";
import { Employee } from "../../../../../domain/entity/employee/Employee";
import { EmployeeMapper } from "../../../mapper/EmployeeMapper";


export class ResetPassword implements IUseCase<ResetPasswordDTO, Promise<ResetPasswordResponse>>{
    private authRepo: IAuthRepository;

    constructor(authRepo: IAuthRepository) {
        this.authRepo = authRepo;
    }

    public async execute (request: ResetPasswordDTO) : Promise<ResetPasswordResponse> {
        let employee: Employee;

        let employeeIdOrError = EmployeeId.create(new Guid(request.employeeId));
        let employeeEmailOrError = EmployeeEmail.create({value: request.email});
        let currentPasswordOrError = EmployeePassword.create({value: request.currentPassword});
        let newPasswordOrError = EmployeePassword.create({value: request.newPassword});

        if (currentPasswordOrError === newPasswordOrError) return left(AppError.Create(new SamePassword()));

        const combinedPropsResult = Result.combine([ employeeIdOrError, employeeEmailOrError, 
            currentPasswordOrError, newPasswordOrError ]);
        if (combinedPropsResult.isFailure) {
            return left(combinedPropsResult.error);
        }

        try {
            employee = await this.authRepo.resetPassword(request)
            const returnedEmployee = EmployeeMapper.toDataModel(employee)
            return right(Result.Ok<ResetPasswordResponseDTO>({ employee: returnedEmployee}));

        } catch(err) {
            return left(AppError.Create(err))
        }

    }
}