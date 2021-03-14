import { Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace AssignDutiesError {

    export class EmployeeDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee does not exist.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to assign duties`
            } as UseCaseError)
        }
    }

}