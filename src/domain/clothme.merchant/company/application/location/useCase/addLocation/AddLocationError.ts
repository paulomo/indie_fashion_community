import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace AddLocationError {

    export class LocationAlreadyExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Location does not exist.`
            } as UseCaseError)
        }
    }

    export class NoPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You are not permitted to add a location`
            } as UseCaseError)
        }
    }

}