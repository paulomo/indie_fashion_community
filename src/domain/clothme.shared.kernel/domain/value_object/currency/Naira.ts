import ValueObject from '../ValueObject';
import ICurrency from './ICurrency';
import { Result } from '../../../error/Result';


export class Naira {

    currencyName: string;
    currenctSymbol: string;
    currencyRate: number; 

    public constructor(name: string, symbol: string, rate: number) {
        this.currencyName = name
        this.currenctSymbol = symbol
        this.currencyRate = rate
    }

    get symbol () : string {
        return this.currenctSymbol;
    }

    get rate () : number {
        return this.currencyRate;
    }

    // public switch(from: ICurrency, to: ICurrency) : Result<ICurrency> {
    //     // check input value
    //     return ;
    // }


}