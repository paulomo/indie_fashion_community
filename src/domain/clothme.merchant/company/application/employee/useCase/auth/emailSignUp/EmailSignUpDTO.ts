 import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";


export interface EmailSignUpDTO extends IDTO {
    companyId: string;
    companyName: string;
    locationId: string;
    locationName: string;
    email: string;
    password: string;
    tier: string;
    signUpDate: string;
}