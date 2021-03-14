import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface CountryAddressProps {
    stateOrProvince?: string;
    zipOrPostalCode?: string;
    country?: string
}

export class CountryAddress extends ValueObject<CountryAddressProps> {

    private constructor(props: CountryAddressProps) {
        super(props)
    }

    public static create (props: CountryAddressProps) : Result<CountryAddress> {
        const addressNullOrUndefinded = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.stateOrProvince, argumentName: 'stateOrProvince'},
            {argument: props.zipOrPostalCode, argumentName: 'zipOrPostalCode'},
            {argument: props.country, argumentName: 'country'},
        ]);

        if (!addressNullOrUndefinded.succeeded) {
            return Result.Fail<CountryAddress>(addressNullOrUndefinded.message)
        }

        return Result.Ok<CountryAddress>(new CountryAddress(props))
    }

    public static createFromStateOrProvince (props: CountryAddressProps) : Result<CountryAddress> {
        const provinceNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.stateOrProvince, 'province');
        if (!provinceNullOrUndefinded.succeeded) {
            return Result.Fail<CountryAddress>(provinceNullOrUndefinded.message)
        }

        return Result.Ok<CountryAddress>(new CountryAddress({country: props.stateOrProvince}))
    }

    public static createFromCountry (props: CountryAddressProps) : Result<CountryAddress> {
        const countryNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.country, 'country');
        if (!countryNullOrUndefinded.succeeded) {
            return Result.Fail<CountryAddress>(countryNullOrUndefinded.message)
        }

        // const countryNotEmpty = Guard.AgainstEmpty(props.country, 'country');
        // if (!countryNotEmpty.succeeded) {
        //     return Result.Fail<CountryAddress>(countryNotEmpty.message);
        // }

        return Result.Ok<CountryAddress>(new CountryAddress({country: props.country}))
    }

    get country () {
        return this.props.country;
    }

    get stateOrProvince () {
        return this.props.stateOrProvince;
    }

    get zipOrPostalCode () {
        return this.props.zipOrPostalCode;
    }

    public change (newValue: CountryAddressProps, oldValue: CountryAddress) : Result<CountryAddress> {
        const addressNullOrUndefinded = Guard.AgainstNullOrUndefindedBulk([
            {argument: newValue.stateOrProvince, argumentName: 'stateOrProvince'},
            {argument: newValue.zipOrPostalCode, argumentName: 'zipOrPostalCode'},
            {argument: newValue.country, argumentName: 'country'},
        ]);

        if (newValue === null || newValue === undefined) {
            return Result.Fail<CountryAddress>('');
        }

        if (newValue == oldValue.props) {
            return Result.Fail<CountryAddress>('')
        }

        return Result.Ok<CountryAddress>(new CountryAddress(newValue))
    }

    public changeStateOrProvince (newValue: string, oldValue: CountryAddress) : Result<CountryAddress> {
        if (newValue === null || newValue === undefined) {
            return Result.Fail<CountryAddress>('');
        }

        if (newValue == oldValue.props.stateOrProvince) {
            return Result.Fail<CountryAddress>('')
        }

        const stateNotEmpty = Guard.AgainstEmpty(newValue, 'state');
        if (!stateNotEmpty.succeeded) {
            return Result.Fail<CountryAddress>(stateNotEmpty.message);
        }

        const stateNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'state');
        if (!stateNotNullOrUndefinded.succeeded) {
            return Result.Fail<CountryAddress>(stateNotNullOrUndefinded.message);
        }

        return Result.Ok<CountryAddress>(new CountryAddress({ 
            stateOrProvince: newValue,
            zipOrPostalCode: oldValue.props.zipOrPostalCode,
            country: oldValue.props.country }))
    }

    public changeProvince () {}

    public changePostalCode () {}

    public changeZipCode () {}

}