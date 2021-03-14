import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace GetIndividualByIndividualNameError {

    export class IndividualDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Individual email already exist.`
            } as UseCaseError)
        }
    }

}