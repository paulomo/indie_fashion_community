import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";


export interface EmailSignUpDTO extends IDTO, ICompanyDTO {
    email: string;
    password: string;
    individualId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    position: string;
    location: string;
    tier: string;
    signUpDate: string;
}