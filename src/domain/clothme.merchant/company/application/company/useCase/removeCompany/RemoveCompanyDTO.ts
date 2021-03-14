import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";

export interface RemoveCompanyDTO extends IDTO {
    companyId: string;
    employeeId: string;
}