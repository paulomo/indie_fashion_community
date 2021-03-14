import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";
import { Money } from "../../../../clothme.shared.kernel/domain/value_object/money/Money";


interface PriceProps {
    value: Money;
}

export class Price extends ValueObject<PriceProps> {

    private static MIN_PRICE = 0;

    public constructor(props: PriceProps) {
        super(props);
    }

    public static create (props: PriceProps) : Result<Price> {
        const priceNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'price');
        if (!priceNullOrUndefinded.succeeded) {
            return Result.Fail<Price>(priceNullOrUndefinded.message);
        }

        const priceMinValue = Guard.AgainstAtLeast(this.MIN_PRICE, 'price');
        if (!priceMinValue.succeeded) {
            return Result.Fail<Price>(priceMinValue.message);
        }

        return Result.Ok<Price>(new Price(props))
    }

    get value () {
        return this.props.value;
    }

    public adjust (price: PriceProps) : Result<Price> {
        const priceNullOrUndefinded = Guard.AgainstNullOrUndefinded(price.value, 'price');
        if (!priceNullOrUndefinded.succeeded) {
            return Result.Fail<Price>(priceNullOrUndefinded.message);
        }

        const priceMinValue = Guard.AgainstAtLeast(Price.MIN_PRICE, 'price');
        if (!priceMinValue.succeeded) {
            return Result.Fail<Price>(priceMinValue.message);
        }
        return Result.Ok<Price>
        (new Price({
            value: new Money({
                amount: price.value.props.amount, 
                currency: price.value.props.currency})
            })
        )
    }
}