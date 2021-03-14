import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";

export interface GetLocationByLocationNameDTO extends IDTO {
    companyId: string;
    locationName: string;
    employeeId: string;
}