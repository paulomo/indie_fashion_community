import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";

export interface EditReplyToReview extends IDTO, ICompanyDTO {
    replyToReviewId: string;
    replyToReviewText: string;
    date: string;
}