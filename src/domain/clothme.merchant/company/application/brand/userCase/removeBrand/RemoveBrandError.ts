import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace RemoveBrandError {

    export class BrandDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Brand does not exist.`
            } as UseCaseError)
        }
    }

    export class BrandAlreadyRemoved extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Brand is already removed.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to remove brand`
            } as UseCaseError)
        }
    }

}