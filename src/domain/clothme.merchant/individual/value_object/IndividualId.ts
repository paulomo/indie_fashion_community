import { Entity } from "../../../clothme.shared.kernel/domain/entity/Entity";
import Guid from "../../../clothme.shared.kernel/domain/entity/Guid";
import { Result } from "../../../clothme.shared.kernel/error/Result";


export class IndividualId extends Entity<any> {

    private constructor(id?: Guid) {
        super(null, id);
    }

    public static create (id?: Guid) : Result<IndividualId> {
        return Result.Ok<IndividualId>(new IndividualId(id));
    }

    get id() {
        return this._id;
    }
}