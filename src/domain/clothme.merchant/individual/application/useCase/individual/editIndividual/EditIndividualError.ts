import { Result } from "../../../../../../clothme.shared.kernel/error/Result"
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError"


export namespace EditIndividualError {

    export class EmailDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee email already exist.`
            } as UseCaseError)
        }
    }

    export class EmailIsIncorrect extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Merchant already exist`
            } as UseCaseError)
        }
    }

    export class PasswordIsIncorrect extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Merchant already exist`
            } as UseCaseError)
        }
    }
    
}