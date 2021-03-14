import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";

export interface RemoveLocationDTO extends IDTO {
    companyId: string;
    locationId: string
    employeeId: string;
}