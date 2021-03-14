import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface StreetAddressProps {
    city: string;
    country: string;
}

export class StreetAddress extends ValueObject<StreetAddressProps> {

    private constructor(props: StreetAddressProps) {
        super(props)
    }

    public static create (props: StreetAddressProps) : Result<StreetAddress> {
        const addressNullOrUndefinded = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.city, argumentName: 'city'},
            {argument: props.country, argumentName: 'country'}
        ]);
        if (!addressNullOrUndefinded.succeeded) {
            return Result.Fail<StreetAddress>(addressNullOrUndefinded.message)
        }

        return Result.Ok<StreetAddress>(new StreetAddress(props))
    }

    get city () {
        return this.props.city;
    }

    get country () {
        return this.props.country;
    }

    public changeStreetNumber (newValue: string, oldValue: StreetAddress) : Result<StreetAddress> {
        if (newValue === null || newValue === undefined) {
            return Result.Fail<StreetAddress>('');
        }

        if (newValue == oldValue.props.city) {
            return Result.Fail<StreetAddress>('')
        }

        const cityNotEmpty = Guard.AgainstEmpty(newValue, "city");
        if (!cityNotEmpty.succeeded) {
            return Result.Fail<StreetAddress>(cityNotEmpty.message);
        }

        const cityNotEmptyNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'city');
        if (!cityNotEmptyNotNullOrUndefinded.succeeded) {
            return Result.Fail<StreetAddress>(cityNotEmptyNotNullOrUndefinded.message);
        }

        return Result.Ok<StreetAddress>(new StreetAddress({ city: newValue, country: oldValue.props.country }))
    }

    public changeStreetName (newValue: string, oldValue: StreetAddress) : Result<StreetAddress> {
        if (newValue === null || newValue === undefined) {
            return Result.Fail<StreetAddress>('');
        }

        if (newValue == oldValue.props.country) {
            return Result.Fail<StreetAddress>('')
        }

        const countryNotEmpty = Guard.AgainstEmpty(newValue, 'country');
        if (!countryNotEmpty.succeeded) {
            return Result.Fail<StreetAddress>(countryNotEmpty.message);
        }

        const streetNameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'country');
        if (!streetNameNotNullOrUndefinded.succeeded) {
            return Result.Fail<StreetAddress>(streetNameNotNullOrUndefinded.message);
        }

        return Result.Ok<StreetAddress>(new StreetAddress({ country: oldValue.props.country, city: newValue }))
    }
    
}