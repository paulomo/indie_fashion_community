import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";

export interface PublishProduct extends IDTO, ICompanyDTO {
    productId: string;
    employeeId: string;
    publishedDate: string;
}