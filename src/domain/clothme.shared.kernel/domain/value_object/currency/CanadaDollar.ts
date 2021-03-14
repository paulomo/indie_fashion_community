import ValueObject from '../ValueObject';
import ICurrency from './ICurrency';
import { Result } from '../../../error/Result';


interface CurrencyProps {
    name: string;
    symbol: string;
    rate: number;
    
}

export default class CanadaDollar extends ValueObject<CurrencyProps> {

    public constructor(props: CurrencyProps) {
        super(props);
    }

    switch(from: ICurrency, to: ICurrency): Result<ICurrency> {
        throw new Error("Method not implemented.");
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