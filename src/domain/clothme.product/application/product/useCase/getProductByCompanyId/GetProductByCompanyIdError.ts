import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace GetProductByCompanyIdError {

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
                message: `You need permission to access company.`
            } as UseCaseError)
        }
    }

}