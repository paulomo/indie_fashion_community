import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace EmailSignUpError {

    export class EmailAlreadyExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Email already exist.`
            } as UseCaseError)
        }
    }

    export class MerchantAlreadyExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Merchant already exist`
            } as UseCaseError)
        }
    }

}