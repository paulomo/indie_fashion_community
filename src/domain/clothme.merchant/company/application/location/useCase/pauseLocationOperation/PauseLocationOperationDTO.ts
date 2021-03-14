import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";

export interface PauseLocationOperationDTO extends IDTO {
    locationId: string;
    companyId: string;
    employeeId: string;
}