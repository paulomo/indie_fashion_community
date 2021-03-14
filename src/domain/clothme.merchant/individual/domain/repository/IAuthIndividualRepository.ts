import { IDTO } from "../../../../clothme.shared.kernel/application/dto/Idto";

export interface IAuthIndividualRespository {
    emailSignUp(data: IDTO) : Promise<void>;
}