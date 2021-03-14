import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";

export interface EditCompanyDTO extends IDTO {
    employeeId: string;
    companyId: string;
    companyName: string;
    tier: string;
    companyCity: string;
    companyStateOrProvince: string;
    companyCountry: string;
    companyEmail: string;
    locationId: string;
    locationName: string;
}