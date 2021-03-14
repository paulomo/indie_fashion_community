import { IRepository } from "../../../../../clothme.shared.kernel/domain/repository/IRepository";
import { Company } from "../../entity/company/Company";
import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";


export interface ICompanyRepository extends IRepository<Company> {
    getCompanyByCompanyId (data: IDTO) : Promise<Company>;
    getCompanyByCompanyName (data: IDTO) : Promise<Company>;
    editCompany (data: IDTO) : Promise<Company>;
    pauseCompanyOperation (data: IDTO) : Promise<void>;
}