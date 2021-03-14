import { Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace AddEmployeeError {

    export class EmployeeCannotBeAdded extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee cannot be added.`
            } as UseCaseError)
        }
    }

    export class NoPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to add Employee.`
            } as UseCaseError)
        }
    }

    export class EmployeeAlreadyExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee already exist`
            } as UseCaseError)
        }
    }

}