import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace PauseLocationOperationError {

    export class LocationDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Location does not exist.`
            } as UseCaseError)
        }
    }

    export class LocationAlreadyPaused extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Location is already paused`
            } as UseCaseError)
        }
    }

}