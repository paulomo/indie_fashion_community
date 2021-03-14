import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";

export interface EmailSignInDTO extends IDTO {
    email: string;
    password: string
}