import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { RemoveReplyToReviewError } from "./RemoveReplyToReviewError";


export type RemoveReplyToReviewResponse = Either<
    RemoveReplyToReviewError.ReviewDoesNotExist |
    RemoveReplyToReviewError.ReviewAlreadyRemoved |
    RemoveReplyToReviewError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>