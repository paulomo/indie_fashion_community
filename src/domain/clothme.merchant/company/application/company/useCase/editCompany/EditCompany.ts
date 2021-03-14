import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { EditCompanyDTO } from "./EditCompanyDTO";
import { EditCompanyResponse } from "./EditCompanyResponse";
import { ICompanyRepository } from "../../../../domain/repository/company/ICompanyRepository";


export class EditCompany implements IUseCase<EditCompanyDTO, Promise<EditCompanyResponse>> {
    private companyRepo: ICompanyRepository

    constructor(companyRepo: ICompanyRepository) {
        this.companyRepo = companyRepo
    }
    execute(request?: EditCompanyDTO): Promise<EditCompanyResponse> {
        throw new Error("Method not implemented.");
    }
}