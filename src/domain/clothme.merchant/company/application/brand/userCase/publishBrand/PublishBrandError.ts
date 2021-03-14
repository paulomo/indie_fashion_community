import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace PublishBrandError {

    export class BrandDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Brand does not exist.`
            } as UseCaseError)
        }
    }

    export class BrandAlreadyPublished extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Brand is already published`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to publish a brand.`
            } as UseCaseError)
        }
    }

}