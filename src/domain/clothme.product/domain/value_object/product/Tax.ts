import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";
import { Price } from "./Price";


interface TaxProps {
    percentage: number;
}

export class Tax extends ValueObject<TaxProps> {

    private static MIN_TAX_PERCENTAGE = 0;

    private constructor(props: TaxProps) {
        super(props);
    }

    public static create (props: TaxProps) : Result<Tax> {
        const percentageNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.percentage, 'tax');
        if (!percentageNullOrUndefinded.succeeded) {
            return Result.Fail<Tax>(percentageNullOrUndefinded.message);
        }

        const percentageMinValue = Guard.AgainstAtLeast(this.MIN_TAX_PERCENTAGE, 'tax');
        if (!percentageMinValue.succeeded) {
            return Result.Fail<Tax>(percentageMinValue.message);
        }

        return Result.Ok<Tax>(new Tax(props));
    }

    get percentage () {
        return this.props.percentage;
    }

    public calculatePercentageValue (aPrice: Price, percentage: number) : Result<Tax> {
        const percentageAndPriceNotNull = Guard.AgainstNullOrUndefindedBulk([
            {argument: aPrice.props.value, argumentName: 'priceValue'},
            {argument: percentage, argumentName: 'percentage'}
        ])
        if (!percentageAndPriceNotNull.succeeded) {
            return Result.Fail<Tax>(percentageAndPriceNotNull.message);
        }

        if (percentage < 0) {
            return Result.Fail<Tax>("percentage value cannot be less than zero");
        }

        const taxPercentage = (aPrice.props.value.props.amount / 100) * percentage;
        return Result.Ok<Tax>(new Tax({ percentage: taxPercentage }));
    }
}