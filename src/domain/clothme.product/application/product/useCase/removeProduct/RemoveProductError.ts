import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace RemoveProductError {

    export class ProductDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Product does not exist.`
            } as UseCaseError)
        }
    }

    export class ProductAlreadyRemoved extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Product already removed.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to remove product.`
            } as UseCaseError)
        }
    }

}