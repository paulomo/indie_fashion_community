import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";


export interface ReplyToReviewDTO extends IDTO {
    replyToReviewId: string;
    replyToReviewText: string;
    publishedDate: string;
}