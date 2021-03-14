import { ICompanyDTO } from "../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";
import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";


export interface UnPublishBrandDTO extends ICompanyDTO, IDTO {
    employeeId: string;
    employeeRole: string[];
    brandId: string;
}