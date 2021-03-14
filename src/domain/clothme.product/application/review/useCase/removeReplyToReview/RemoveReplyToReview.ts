import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";

export interface RemoveReplyToReviewProps extends IDTO, ICompanyDTO {
    replyToReviewId: string;
    activityDate: string;
    companyId: string;
    locationId: string;
}

export class RemoveReplyToReview {
   
}