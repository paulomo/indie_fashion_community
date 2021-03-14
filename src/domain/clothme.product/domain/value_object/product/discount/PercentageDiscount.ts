import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";
import { IDiscount } from './IDiscount';


interface PercentageDiscountProps {
    discountName: string;
    discountPercentage: number;
}

export class PercentageDiscount extends ValueObject<PercentageDiscountProps> implements IDiscount {

    private constructor(props: PercentageDiscountProps) {
        super(props);
    }

    public static create(props: PercentageDiscountProps) : Result<PercentageDiscount> {
       return Result.Ok<PercentageDiscount>(new PercentageDiscount(props))
    }

    get name () {
        return this.props.discountName;
    }

    get value () {
        return this.props.discountPercentage;
    }

}