import { Entity } from "../../../../../clothme.shared.kernel/domain/entity/Entity";
import Guid from "../../../../../clothme.shared.kernel/domain/entity/Guid";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";

export class OrderId extends Entity<any> {

    private constructor(id?: Guid) {
        super(id);
    }

    public static create (id?: Guid) : Result<OrderId> {
        return Result.Ok<OrderId>(new OrderId(id));
    }

    get id() {
        return this._id;
    }
}