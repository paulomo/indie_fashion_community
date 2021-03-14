import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { ReplyToReviewError } from "./ReplyToReviewError";


export type ReplyToReviewResponse = Either<
    ReplyToReviewError.ReviewAlreadyAdded |
    ReplyToReviewError.ReviewDoesNotExist |
    ReplyToReviewError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>