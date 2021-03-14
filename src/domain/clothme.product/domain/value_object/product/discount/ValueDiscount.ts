import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";


interface ValueDiscountProps {
    name: string;
    value: number;
}

export class ValueDiscount extends ValueObject<ValueDiscountProps> {

    private constructor(props: ValueDiscountProps) {
        super(props);
    }

    private static create (props: ValueDiscountProps) : Result<ValueDiscount> {
        const noEmptyValue = Guard.AgainstEmpty(props.name, 'name');
        if (!noEmptyValue.succeeded) {
            return Result.Fail<ValueDiscount>("")
        }

        const noNullValue = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.name, argumentName: 'name'},
            {argument: props.value, argumentName: 'value'}
        ]);
        if (!noNullValue.succeeded) {
            return Result.Fail<ValueDiscount>("")
        }

        return Result.Ok<ValueDiscount>(new ValueDiscount(props))
    }

    get name () {
        return this.props.name;
    }

    get value () {
        return this.props.value;
    }
}