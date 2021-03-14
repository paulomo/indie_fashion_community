import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";


export interface ForgotPasswordDTO extends IDTO, ICompanyDTO {
    email: string;
    employeeId: string;
}