import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";

export interface RemoveProductDTO extends IDTO, ICompanyDTO {
    productId: string;
    employeeId: string;
    removedDate: string;
}