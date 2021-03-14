import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";


export interface VerifyIndividualDTO extends IDTO {
    identity: File;
    approvalLetter: File;
} 