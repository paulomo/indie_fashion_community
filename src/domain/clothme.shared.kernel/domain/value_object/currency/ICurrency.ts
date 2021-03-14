import { Result } from "../../../error/Result";

export default interface ICurrency {
    currencyName: string;
    currenctSymbol: string;
    currencyRate: number;

    switch(from: ICurrency, to: ICurrency) : Result<ICurrency>;
} 