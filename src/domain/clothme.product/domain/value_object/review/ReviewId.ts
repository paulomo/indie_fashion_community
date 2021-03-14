import { Entity } from "../../../../clothme.shared.kernel/domain/entity/Entity";
import Guid from "../../../../clothme.shared.kernel/domain/entity/Guid";
import { Result } from "../../../../clothme.shared.kernel/error/Result"


export class ReviewId extends Entity<any> {

    private constructor(id?: Guid) {
        super(id)
    }

    public static create (id?: Guid) : Result<ReviewId> {
        return Result.Ok<ReviewId>(new ReviewId(id));
    }

    get id() : Guid {
        return this._id;
    }
}