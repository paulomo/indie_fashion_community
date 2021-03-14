import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface StreetAddressProps {
    streetNumber?: number;
    streetName?: string;
    city?: string;
}

export class StreetAddress extends ValueObject<StreetAddressProps> {

    private constructor(props: StreetAddressProps) {
        super(props)
    }

    public static create (props: StreetAddressProps) : Result<StreetAddress> {
        const addressNullOrUndefinded = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.streetNumber, argumentName: 'streetNumber'},
            {argument: props.streetName, argumentName: 'streetName'},
            {argument: props.city, argumentName: 'city'},
        ]);
        if (!addressNullOrUndefinded.succeeded) {
            return Result.Fail<StreetAddress>(addressNullOrUndefinded.message)
        }

        const addressEmpty = Guard.AgainstEmptyBulk([
            {argument: props.streetName, argumentName: 'streetName'},
            {argument: props.city, argumentName: 'city'},
        ]);
        if (!addressEmpty.succeeded) {
            return Result.Fail<StreetAddress>(addressEmpty.message)
        }

        return Result.Ok<StreetAddress>(new StreetAddress(props))
    }

    public static createFromCity (props: StreetAddressProps) : Result<StreetAddress> {
        const cityNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.city as string, 'city');
        if (!cityNullOrUndefinded.succeeded) {
            return Result.Fail<StreetAddress>(cityNullOrUndefinded.message)
        }

        const cityNotEmpty = Guard.AgainstEmpty(props.city as string, 'city');
        if (!cityNotEmpty.succeeded) {
            return Result.Fail<StreetAddress>(cityNotEmpty.message);
        }

        return Result.Ok<StreetAddress>(new StreetAddress({city: props.city}))
    }

    get streetNumber () {
        return this.props.streetNumber;
    }

    get streetName () {
        return this.props.streetName;
    }

    get city () {
        return this.props.city;
    }

    public changeStreetNumber (newValue: number, oldValue: StreetAddress) : Result<StreetAddress> {
        if (newValue === null || newValue === undefined) {
            return Result.Fail<StreetAddress>('');
        }

        if (newValue == oldValue.props.streetNumber) {
            return Result.Fail<StreetAddress>('')
        }

        const streetNumberNotEmpty = Guard.AgainstNegative(newValue, 'streetNumber');
        if (!streetNumberNotEmpty.succeeded) {
            return Result.Fail<StreetAddress>(streetNumberNotEmpty.message);
        }

        const streetNumberNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'streetNumber');
        if (!streetNumberNotNullOrUndefinded.succeeded) {
            return Result.Fail<StreetAddress>(streetNumberNotNullOrUndefinded.message);
        }

        return Result.Ok<StreetAddress>(new StreetAddress({ streetNumber: newValue, streetName: oldValue.props.streetName, city: oldValue.props.city }))
    }

    public changeStreetName (newValue: string, oldValue: StreetAddress) : Result<StreetAddress> {
        if (newValue === null || newValue === undefined) {
            return Result.Fail<StreetAddress>('');
        }

        if (newValue == oldValue.props.streetName) {
            return Result.Fail<StreetAddress>('')
        }

        const streetNameNotEmpty = Guard.AgainstEmpty(newValue, 'streetName');
        if (!streetNameNotEmpty.succeeded) {
            return Result.Fail<StreetAddress>(streetNameNotEmpty.message);
        }

        const streetNameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'streetName');
        if (!streetNameNotNullOrUndefinded.succeeded) {
            return Result.Fail<StreetAddress>(streetNameNotNullOrUndefinded.message);
        }

        return Result.Ok<StreetAddress>(new StreetAddress({ streetNumber: oldValue.props.streetNumber, streetName: newValue, city: oldValue.props.city }))
    }

    public changeCity (newValue: string, oldValue: StreetAddress) : Result<StreetAddress> {
        if (newValue === null || newValue === undefined) {
            return Result.Fail<StreetAddress>('');
        }

        if (newValue == oldValue.props.city) {
            return Result.Fail<StreetAddress>('')
        }

        const cityNotEmpty = Guard.AgainstEmpty(newValue, 'city');
        if (!cityNotEmpty.succeeded) {
            return Result.Fail<StreetAddress>(cityNotEmpty.message);
        }

        const cityNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'city');
        if (!cityNotNullOrUndefinded.succeeded) {
            return Result.Fail<StreetAddress>(cityNotNullOrUndefinded.message);
        }

        return Result.Ok<StreetAddress>(new StreetAddress({ streetNumber: oldValue.props.streetNumber, streetName: oldValue.props.streetName, city: newValue }))
    }

}