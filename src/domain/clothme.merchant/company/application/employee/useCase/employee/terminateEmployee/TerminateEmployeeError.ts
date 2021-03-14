import { Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace TerminateEmployeeError {

    export class EmployeeDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee email already exist.`
            } as UseCaseError)
        }
    }

    export class EmployeeAlreadyTerminated extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee already terminated`
            } as UseCaseError)
        }
    }

    export class EmployeeCannotBeTerminated extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee cannot be terminated`
            } as UseCaseError)
        }
    }

}