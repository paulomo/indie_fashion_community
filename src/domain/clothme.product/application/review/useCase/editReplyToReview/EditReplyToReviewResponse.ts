import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { EditReplyToReviewError } from "./EditReplyToReviewError";


export type EditReplyToReviewErrorResponse = Either<
    EditReplyToReviewError.ReviewDoesNotExist |
    EditReplyToReviewError.NeedPermission |
    EditReplyToReviewError.InvalidData |
    AppError |
    Result<any>,
    Result<void> 
>