import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { EmailSignUpDTO } from "./EmailSignUpDTO";
import { EmailSignUpResponse } from "./EmailSignUpResponse";
import { IAuthRepository } from "../../../../../company/domain/repository/auth/IAuthRepository";


export class EmailSignUp implements IUseCase<EmailSignUpDTO, Promise<EmailSignUpResponse>>{
    private authRepo: IAuthRepository;

    constructor(authRepo: IAuthRepository) {
        this.authRepo = authRepo;
    }

    execute (request: EmailSignUpDTO) : Promise<EmailSignUpResponse> {
        throw new Error("Method not implemented.");
    }
    
}