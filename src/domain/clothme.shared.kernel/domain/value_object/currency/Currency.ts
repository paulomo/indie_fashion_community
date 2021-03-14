import ValueObject from "../ValueObject";
import ICurrency from "./ICurrency";
import { Guard } from "../../../error/Guard";
import { Result } from "../../../error/Result";


interface CurrencyProps {
    type: ICurrency;
}

export class Currency extends ValueObject<CurrencyProps> {

    public constructor(props: CurrencyProps) {
        super(props);
    }

    public static create (props: CurrencyProps) : Result<Currency> {
        const resultCurrencyEmpty = Guard.AgainstEmptyBulk([
            {argument: props.type.currencyName, argumentName: 'currencyName'},
            {argument: props.type.currenctSymbol, argumentName: 'currencySymbol'}
        ]);
        if (!resultCurrencyEmpty.succeeded) {
            return Result.Fail<Currency>(resultCurrencyEmpty.message);
        }

        const resultCurrencyNullOrUndefinded = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.type.currencyName, argumentName: 'currencyName'},
            {argument: props.type.currenctSymbol, argumentName: 'currencySymbol'},
            {argument: props.type.currencyRate, argumentName: 'currencyRate'}
        ]);
        if (!resultCurrencyNullOrUndefinded.succeeded) {
            return Result.Fail<Currency>(resultCurrencyNullOrUndefinded.message);
        }

        return Result.Ok<Currency>(new Currency(props));
    }

    get currencyType () {
        return this.props.type;
    }

}