import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { EmailSignInDTO } from "./EmailSignInDTO";
import { EmailSignInResponse } from "./EmailSignInResponse";
import { IEmployeeRepository } from "../../../../../company/domain/repository/employee/IEmployeeRepository";
import { IAuthRepository } from "../../../../../company/domain/repository/auth/IAuthRepository";
import { Employee } from "../../../../../company/domain/entity/employee/Employee";


export class EmailSignIn implements IUseCase<EmailSignInDTO, Promise<EmailSignInResponse>> {
    private authRepo: IAuthRepository;
    private employeeRepo: IEmployeeRepository;

    constructor(authRepo: IAuthRepository, employeeRepo: IEmployeeRepository) {
        this.authRepo = authRepo;
        this.employeeRepo = employeeRepo;
    }

    public async execute (request: EmailSignInDTO) : Promise<EmailSignInResponse> {
        throw new Error("Method not implemented.");
    }
}