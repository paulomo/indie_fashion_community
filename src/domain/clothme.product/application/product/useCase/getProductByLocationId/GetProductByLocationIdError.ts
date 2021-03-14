import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace GetProductByLocationIdError {

    export class LocationDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Location does not exist.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to access location.`
            } as UseCaseError)
        }
    }

}