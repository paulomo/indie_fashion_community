import { Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace VerifyEmployeeError {

    export class EmployeeDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee email already exist.`
            } as UseCaseError)
        }
    }

    export class EmployeeAlreadyVerified extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee already verified`
            } as UseCaseError)
        }
    }

}