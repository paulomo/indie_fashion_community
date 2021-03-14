import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO"


export interface ResetPasswordDTO extends IDTO, ICompanyDTO {
    employeeId: string;
    companyId: string;
    locationId: string;
    email: string;
    currentPassword: string;
    newPassword: string;
    currentDate: string;
}