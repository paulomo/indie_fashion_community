import { Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace GetEmployeeByEmployeeIdError {

    export class EmployeeDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Employee email already exist.`
            } as UseCaseError)
        }
    }

}