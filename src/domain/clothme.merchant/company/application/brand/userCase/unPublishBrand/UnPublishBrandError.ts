import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace UnPublishBrandError {

    export class BrandDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Brand does not exist.`
            } as UseCaseError)
        }
    }

    export class BrandAlreadyUnPublished extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Brand is already UnPublished.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to unpublish brand`
            } as UseCaseError)
        }
    }

}