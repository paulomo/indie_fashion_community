import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface QuantityProps {
    value: number;
}

export default class Quantity extends ValueObject<QuantityProps> {

    private static minQuantity: number = 1; 

    private constructor(props: QuantityProps) {
        super(props)
    }

    public static create (props: QuantityProps) : Result<Quantity> {
        const quantityNotNullorUndefined = Guard.AgainstNullOrUndefinded(props.value, 'quantity');
        if (!quantityNotNullorUndefined.succeeded) {
            return Result.Fail<Quantity>(quantityNotNullorUndefined.message);
        }

        const minQuantityResult = Guard.AgainstLessThan(this.minQuantity, props.value);
        if (!minQuantityResult.succeeded) {
            return Result.Fail<Quantity>(minQuantityResult.message);
        }

        return Result.Ok<Quantity>(new Quantity(props));
    }

    get value () {
        return this.props.value;
    }

    public increase (quantity: number) : Result<Quantity> {
        const numberValidation = Guard.AgainstNullOrUndefinded(quantity, 'quantity');
        if (numberValidation) {
            return Result.Fail<Quantity>(numberValidation.message);
        }

        return Result.Ok<Quantity>(new Quantity({ value: this.props.value + quantity}))
    }

    public reduce (quantity: number) : Result<Quantity> {
        const numberValidation = Guard.AgainstNullOrUndefinded(quantity, 'quantity');
        if (numberValidation) {
            return Result.Fail<Quantity>(numberValidation.message);
        }

        const zeroNumberValidation = Guard.AgainstZero(quantity, 'quantity');
        if (zeroNumberValidation) {
            return Result.Fail<Quantity>(zeroNumberValidation.message);
        }

        const lessThanNumberValidation = Guard.LesserThan(this.props.value, quantity);
        if (numberValidation) {
            return Result.Fail<Quantity>(lessThanNumberValidation.message);
        }

        return Result.Ok<Quantity>(new Quantity({ value: this.props.value - quantity}))
    }
}