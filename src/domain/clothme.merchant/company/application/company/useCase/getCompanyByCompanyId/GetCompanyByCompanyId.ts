import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { GetCompanyByCompanyIdDTO } from "./GetCompanyByCompanyIdDTO";
import { GetCompanyByCompanyIdResponse } from "./GetCompanyByCompanyIdResponse";
import { ICompanyRepository } from "../../../../domain/repository/company/ICompanyRepository";


export class GetCompanyByCompanyId implements IUseCase<GetCompanyByCompanyIdDTO, Promise<GetCompanyByCompanyIdResponse>> {
    private companyRepo: ICompanyRepository

    constructor(companyRepo: ICompanyRepository) {
        this.companyRepo = companyRepo
    }
    execute(request?: GetCompanyByCompanyIdDTO): Promise<GetCompanyByCompanyIdResponse> {
        throw new Error("Method not implemented.");
    }
}