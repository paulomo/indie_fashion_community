import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";


export interface LaunchLocationDTO extends IDTO {
    companyId: string;
    locationId: string;
    employeeId: string;
}