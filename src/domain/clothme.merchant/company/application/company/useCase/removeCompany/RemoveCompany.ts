import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { RemoveCompanyDTO } from "./RemoveCompanyDTO";
import { RemoveCompanyResponse } from "./RemoveCompanyResponse";
import { ICompanyRepository } from "../../../../domain/repository/company/ICompanyRepository";


export class RemoveCompany implements IUseCase<RemoveCompanyDTO, Promise<RemoveCompanyResponse>> {
    private companyRepo: ICompanyRepository

    constructor(companyRepo: ICompanyRepository) {
        this.companyRepo = companyRepo
    }
    execute(request?: RemoveCompanyDTO): Promise<RemoveCompanyResponse> {
        throw new Error("Method not implemented.");
    }
}