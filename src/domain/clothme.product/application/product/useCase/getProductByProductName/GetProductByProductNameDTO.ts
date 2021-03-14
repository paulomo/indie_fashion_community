import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";

export interface GetProducyByProductNameDTO extends IDTO, ICompanyDTO {
    productName: string;
    employeeId: string;
}