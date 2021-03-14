import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace RemoveReplyToReviewError {

    export class ReviewDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Review does not exist.`
            } as UseCaseError)
        }
    }

    export class ReviewAlreadyRemoved extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Review already removed.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to removed this review.`
            } as UseCaseError)
        }
    }

}