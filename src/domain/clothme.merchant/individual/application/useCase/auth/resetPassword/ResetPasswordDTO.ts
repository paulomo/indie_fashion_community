import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO"


export interface ResetPasswordDTO extends IDTO {
    userId: string;
    email: string;
    currentPassword: string;
    newPassword: string;
    currentDate: string;
}