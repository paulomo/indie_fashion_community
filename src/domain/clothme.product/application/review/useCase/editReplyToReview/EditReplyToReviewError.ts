import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace EditReplyToReviewError {

    export class ReviewDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Review does not exist.`
            } as UseCaseError)
        }
    }

    export class InvalidData extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Invalid data.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to edit a reply to review.`
            } as UseCaseError)
        }
    }

}