import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace ReplyToReviewError {

    export class ReviewDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Review does not exist.`
            } as UseCaseError)
        }
    }

    export class ReviewAlreadyAdded extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Review already added.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to add review.`
            } as UseCaseError)
        }
    }

}