import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IAuthIndividualRespository } from "../../../../domain/repository/IAuthIndividualRepository";
import { IIndividualRepository } from "../../../../domain/repository/IIndividualRepository";
import { ResetPasswordDTO } from "./ResetPasswordDTO";
import { ResetPasswordResponse } from "./ResetPasswordResponse";


export class ResetPassword implements IUseCase<ResetPasswordDTO, Promise<ResetPasswordResponse>>{
    private authRepo: IAuthIndividualRespository;
    private employeeRepo: IIndividualRepository;

    constructor(authRepo: IAuthIndividualRespository, employeeRepo: IIndividualRepository) {
        this.authRepo = authRepo;
        this.employeeRepo = employeeRepo;
    }

    execute (request: ResetPasswordDTO) : Promise<ResetPasswordResponse> {
        throw new Error("Method not implemented.");
    }
}