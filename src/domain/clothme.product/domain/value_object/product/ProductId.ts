import { Entity } from "../../../../clothme.shared.kernel/domain/entity/Entity";
import Guid from "../../../../clothme.shared.kernel/domain/entity/Guid";
import { Result } from "../../../../clothme.shared.kernel/error/Result"


export class ProductId extends Entity<any> {

    private constructor(id?: Guid) {
        super(null, id)
    }

    public static create (id?: Guid) : Result<ProductId> {
        return Result.Ok<ProductId>(new ProductId(id));
    }

    get id() : Guid {
        return this._id;
    }
}