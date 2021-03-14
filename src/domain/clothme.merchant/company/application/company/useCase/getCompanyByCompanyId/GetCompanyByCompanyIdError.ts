import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace GetCompanyByCompanyIdError {

    export class CompanyDoesNotExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Company does not exist.`
            } as UseCaseError)
        }
    }

    export class AccessDenied extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You do not have permission to access this data`
            } as UseCaseError)
        }
    }

}