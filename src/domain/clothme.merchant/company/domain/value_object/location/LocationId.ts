import { Entity } from "../../../../../clothme.shared.kernel/domain/entity/Entity";
import Guid from "../../../../../clothme.shared.kernel/domain/entity/Guid";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";


export class LocationId extends Entity<any> {

    private constructor(id?: Guid) {
        super(null, id);
    }

    public static create (id?: Guid) : Result<LocationId> {
        return Result.Ok<LocationId>(new LocationId(id));
    }

    get id () {
        return this._id;
    }
}