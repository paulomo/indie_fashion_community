import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../clothme.shared.kernel/error/UseCaseError";


export namespace AddBrandError {

    export class BrandAlreadyExist extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `Brand already exist`
            } as UseCaseError)
        }
    }

    export class NeedPermission extends Result<UseCaseError> {
        constructor () {
            super(false, {
                message: `You need permission to add brand.`
            } as UseCaseError)
        }
    }

}