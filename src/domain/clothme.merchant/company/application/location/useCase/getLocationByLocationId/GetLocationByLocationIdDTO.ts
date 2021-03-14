import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";


export interface GetLocationByLocationIdDTO extends IDTO {
    companyId: string;
    locationId: string;
    employeeId: string;
}