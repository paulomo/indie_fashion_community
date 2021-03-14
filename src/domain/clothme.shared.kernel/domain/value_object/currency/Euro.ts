import ValueObject from '../ValueObject';
import ICurrency from './ICurrency';


interface CurrencyProps {
    name: string;
    symbol: string;
    rate: number;
}

export default class Euro extends ValueObject<CurrencyProps> {

    public constructor(props: CurrencyProps) {
        super(props);
    }

    public Currency () : string {
        return this.props.name;
    }

    public Symbol () : string {
        return this.props.symbol;
    }

    public Rate () : number {
        return this.props.rate;
    }

    // public Switch(from: ICurrency, to: ICurrency) : ICurrency {
    //     // check input value
    //     return ;
    // }


}