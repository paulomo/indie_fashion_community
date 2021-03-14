import ValueObject from '../ValueObject';
import ICurrency from './ICurrency';
import { Result } from '../../../error/Result';
import { Guard } from '../../../error/Guard';


export class USDollar implements ICurrency {

    currencyName: string;
    currenctSymbol: string;
    currencyRate: number; 

    public constructor(name: string, symbol: string, rate: number) {
        this.currencyName = name
        this.currenctSymbol = symbol
        this.currencyRate = rate
    }

    public static create (name: string, symbol: string, rate: number) : Result<USDollar> {
        const resultCurrencyEmpty = Guard.AgainstEmptyBulk([
            {argument: name, argumentName: 'name'},
            {argument: symbol, argumentName: 'symbol'},
            {argument: rate, argumentName: 'rate'}
        ]);
        if (!resultCurrencyEmpty.succeeded) {
            return Result.Fail<USDollar>(resultCurrencyEmpty.message);
        }

        const resultCurrencyNullOrUndefinded = Guard.AgainstNullOrUndefindedBulk([
            {argument: name, argumentName: 'name'},
            {argument: symbol, argumentName: 'symbol'},
            {argument: rate, argumentName: 'rate'}
        ]);
        if (!resultCurrencyNullOrUndefinded.succeeded) {
            return Result.Fail<USDollar>(resultCurrencyNullOrUndefinded.message);
        }

        return Result.Ok<USDollar>(new USDollar(name, symbol, rate));
    }

    get currency () {
        return this.currencyName;
    }

    get symbol ()  {
        return this.currenctSymbol;
    }

    get rate () {
        return this.currencyRate;
    }

    public switch(fromCurrency: ICurrency, toCurrency: ICurrency) : Result<ICurrency> {
        if (fromCurrency.currenctSymbol == toCurrency.currenctSymbol) {
            return Result.Fail<ICurrency>('Currency symbol must be different')
        }

        if (toCurrency.currencyName == toCurrency.currencyName) {
            return Result.Fail<ICurrency>('Currency name must be different')
        }

        return Result.Ok<ICurrency>(toCurrency)
    }


}