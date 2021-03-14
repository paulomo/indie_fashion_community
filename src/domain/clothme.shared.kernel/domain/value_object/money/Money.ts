import ValueObject from "../ValueObject";
import ICurrency from "../currency/ICurrency";
import { Result } from "../../../error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";
import { Currency } from "../currency/Currency";


interface MoneyProps {
    amount: number;
    currency: Currency;
}

export class Money extends ValueObject<MoneyProps>  {

    public constructor(props: MoneyProps) {
        super(props);
    }

    get amount () {
        return this.props.amount
    }

    get currency () {
        return this.props.currency;
    }

    // public compare(otherMoney: Money) : Result<Money> {}

    // public isSame(otherMoney: Money) : Result<Money> {}

    // public Convert(amount: number, currency: ICurrency) : Money {
    //     // check input values
    //     return new Money({amount: toAmount, currency: toCurrency, currencySymbol: toSymbol});
    // }


}