import { Entity } from "../../../../clothme.shared.kernel/domain/entity/Entity";
import Guid from "../../.././../clothme.shared.kernel/domain/entity/Guid";
import { Result } from '../../../../clothme.shared.kernel/error/Result';

export class AccountId extends Entity<any> {

    private constructor(anAccountId: Guid) {
        super(null, anAccountId);
    }

    public static Create (anAccountId: Guid) : Result<AccountId> {
        return Result.Ok<AccountId>(new AccountId(anAccountId));
    }

    get Id() {
        return this._id;
    }
}