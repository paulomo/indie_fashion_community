import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { Result, right, left } from "../../../../../../../clothme.shared.kernel/error/Result";
import { EmailSignInResponseDTO } from "./EmailSignInResponse";
import { EmployeeApplicationModel } from "../../../model/EmployeeApplicationModel";

// Input
import { EmailSignInDTO } from "./EmailSignInDTO";
import { EmailSignInResponse } from "./EmailSignInResponse";
import { IAuthRepository } from "../../../../../domain/repository/auth/IAuthRepository";


// Employee Import
import { Employee } from "../../../../../domain/entity/employee/Employee";
import { EmployeeEmail } from "../../../../../domain/value_object/employee/EmployeeEmail";
import { EmployeePassword } from "../../../../../domain/value_object/employee/EmployeePassword";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { EmployeeMapper } from "../../../mapper/EmployeeMapper";


export class EmailSignIn implements IUseCase<EmailSignInDTO, Promise<EmailSignInResponse>> {
    private authRepo: IAuthRepository;

    constructor(authRepo: IAuthRepository) {
        this.authRepo = authRepo;
    }

    public async execute (request: EmailSignInDTO) : Promise<EmailSignInResponse> {
        let employee: Employee;

        const emailOrError = EmployeeEmail.create({value: request.email});
        const passwordOrError = EmployeePassword.create({value: request.password});
        
        const combinedPropsResult = Result.combine([ emailOrError, passwordOrError ]);
        if (combinedPropsResult.isFailure) {
            return left(combinedPropsResult.error);
        }

        try {
            employee = await this.authRepo.signInWithEmail(request);
            const returnedEmployee = EmployeeMapper.toDataModel(employee)
            return right(Result.Ok<EmailSignInResponseDTO>({employee: returnedEmployee}));
        }catch(error) {
            return left(AppError.Create(error)); 
        }
        
    }
}