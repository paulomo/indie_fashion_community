import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace UnPublishProductError {

    export class ProductDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Product does not exist.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to publish product.`
            } as UseCaseError)
        }
    }

}