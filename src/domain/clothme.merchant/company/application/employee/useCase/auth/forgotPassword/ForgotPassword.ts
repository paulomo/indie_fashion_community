import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { ForgotPasswordDTO } from "./ForgotPasswordDTO";
import { ForgotPasswordResponse } from "./ForgotPasswordResponse";
import { IAuthRepository } from "../../../../../domain/repository/auth/IAuthRepository";
import { left, right, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { EmployeeEmail } from "../../../../../domain/value_object/employee/EmployeeEmail";
import { EmployeeId } from "../../../../../domain/value_object/employee/EmployeeId";
import Guid from "../../../../../../../clothme.shared.kernel/domain/entity/Guid";


export class ForgotPassword implements IUseCase<ForgotPasswordDTO, Promise<ForgotPasswordResponse>>{
    private authRepo: IAuthRepository;

    constructor(authRepo: IAuthRepository) {
        this.authRepo = authRepo;
    }

    public async execute (request: ForgotPasswordDTO) : Promise<ForgotPasswordResponse> {

        let emailOrError = EmployeeEmail.create({ value: request.email });
        let employeeIdOrError = EmployeeId.create(new Guid());

        const combinedPropsResult = Result.combine([ emailOrError, employeeIdOrError]);
        if (combinedPropsResult.isFailure) return left(combinedPropsResult.error);

        try {
            const response = await this.authRepo.forgotPassword(request)
            return right(Result.Ok<any>(response))
        } catch(error) {
            return left(AppError.Create(error));
        }

    }
}