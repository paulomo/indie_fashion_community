import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";


export interface GetProductByBrandIdDTO extends IDTO, ICompanyDTO {
    employeeId: string;
}