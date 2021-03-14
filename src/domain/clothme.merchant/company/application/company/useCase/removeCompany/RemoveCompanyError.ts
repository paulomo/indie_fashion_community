import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace RemoveCompanyError {

    export class CompanyDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Company does not exist.`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to remove a company`
            } as UseCaseError)
        }
    }

}