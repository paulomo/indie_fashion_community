import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { IDiscount } from "./discount/IDiscount";
import { Result } from "../../../../clothme.shared.kernel/error/Result";

export interface DiscountProps {
    discounts: [IDiscount]
} 

export class Discount extends ValueObject<DiscountProps> {

    private constructor(props: DiscountProps) {
        super(props)
    }

    public static create(props: DiscountProps) : Result<Discount> {
        return Result.Ok<Discount>(new Discount(props))
    }

    get discounts() : [IDiscount] {
        return this.props.discounts
    }
}