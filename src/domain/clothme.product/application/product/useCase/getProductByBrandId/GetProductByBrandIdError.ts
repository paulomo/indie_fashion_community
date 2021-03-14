import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace GetProductByBrandIdError {

    export class BrandDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Brand does not exist.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to access brand.`
            } as UseCaseError)
        }
    }

}