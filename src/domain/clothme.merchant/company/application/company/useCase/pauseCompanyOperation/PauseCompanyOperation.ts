import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { PauseCompanyOperationDTO } from "./PauseCompanyOperationDTO";
import { PauseCompanyOperationResponse } from "./PauseCompanyOperationResponse";
import { ICompanyRepository } from "../../../../domain/repository/company/ICompanyRepository";


export class PauseCompanyOperation implements IUseCase<PauseCompanyOperationDTO, Promise<PauseCompanyOperationResponse>> {
    private companyRepo: ICompanyRepository

    constructor(companyRepo: ICompanyRepository) {
        this.companyRepo = companyRepo
    }

    public async execute(request?: PauseCompanyOperationDTO): Promise<PauseCompanyOperationResponse> {
        throw new Error("Method not implemented.");
    }
}