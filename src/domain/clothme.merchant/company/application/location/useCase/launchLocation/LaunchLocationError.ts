import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace LaunchLocationError {

    export class LocationDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Location does not exist.`
            } as UseCaseError)
        }
    }
    
    export class NoPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You are not permitted to unpublish this location`
            } as UseCaseError)
        }
    }

}