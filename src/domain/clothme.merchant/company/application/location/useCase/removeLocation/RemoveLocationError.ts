import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace RemoveLocationError {

    export class LocationDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Location does not.`
            } as UseCaseError)
        }
    }

    export class LocationAlreadyRemoved extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Location is already removed`
            } as UseCaseError)
        }
    }

}