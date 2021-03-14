import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";


export interface EditLocationDTO extends IDTO {
    employeeId: string;
    companyId: string;
    locationId: string;
    locationName: string;
    locationCity: string;
    locationEmail: string;
}