import { Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace AssignRoleError {

    export class EmployeeDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee email already exist.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to assign roles`
            } as UseCaseError)
        }
    }

}