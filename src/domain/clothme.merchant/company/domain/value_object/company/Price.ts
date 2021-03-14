import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import ICurrency from "../../../../../clothme.shared.kernel/domain/value_object/currency/ICurrency";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface PriceProps {
    value: number;
    currency: ICurrency;
}

export class Price extends ValueObject<PriceProps> {

    private constructor (props: PriceProps) {
        super(props);
    }

    public static set (props: PriceProps) : Result<Price> {
        const priceNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'priceValue');
        if (!priceNotNullOrUndefinded.succeeded) {
            return Result.Fail<Price>(priceNotNullOrUndefinded.message);
        }

        const currencyNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.currency, 'priceCurrency');
        if (!currencyNotNullOrUndefinded.succeeded) {
            return Result.Fail<Price>(currencyNotNullOrUndefinded.message);
        }

        return Result.Ok<Price>(new Price(props))

    }

    public add (price: Price, priceToAdd: Price) : Result<Price> {
        if (price.props.currency == priceToAdd.props.currency) {
            return Result.Fail<Price>("");
        }
        const newPrice = price.props.value + priceToAdd.props.value;
        return Result.Ok<Price>(new Price({ value: newPrice, currency: price.props.currency }))
    }

    public subtract (price: Price, priceToAdd: Price) : Result<Price> {
        if (price.props.currency == priceToAdd.props.currency) {
            return Result.Fail<Price>("");
        }
        const newPrice = price.props.value - priceToAdd.props.value;
        return Result.Ok<Price>(new Price({ value: newPrice, currency: price.props.currency}))
    }
}