import ValueObject from "../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Guard } from "../../../clothme.shared.kernel/error/Guard";
import { Result } from "../../../clothme.shared.kernel/error/Result";


interface IndividualAddressProps {
    city?: string;
    stateOrProvince?: string;
    country?: string;
}


export class IndividualAddress extends ValueObject<IndividualAddressProps> {

    private constructor(props: IndividualAddressProps) {
        super(props)
    }

    public static create (props: IndividualAddressProps) : Result<IndividualAddress> {
        const addressNullOrUndefinded = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.city, argumentName: 'city'},
            {argument: props.stateOrProvince, argumentName: 'stateOrProvince'},
            {argument: props.country, argumentName: 'country'},
        ]);
        if (!addressNullOrUndefinded.succeeded) {
            return Result.Fail<IndividualAddress>(addressNullOrUndefinded.message)
        }

        const addressEmpty = Guard.AgainstEmptyBulk([
            {argument: props.city, argumentName: 'city'},
            {argument: props.stateOrProvince, argumentName: 'stateOrProvince'},
            {argument: props.country, argumentName: 'country'}
        ]);
        if (!addressEmpty.succeeded) {
            return Result.Fail<IndividualAddress>(addressEmpty.message)
        }

        return Result.Ok<IndividualAddress>(new IndividualAddress(props))
    }

    public static createFromCity (props: IndividualAddressProps) : Result<IndividualAddress> {
        const cityNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.city, 'city');
        if (!cityNullOrUndefinded.succeeded) {
            return Result.Fail<IndividualAddress>(cityNullOrUndefinded.message)
        }

        const cityNotEmpty = Guard.AgainstEmpty(props.city as string, 'city');
        if (!cityNotEmpty.succeeded) {
            return Result.Fail<IndividualAddress>(cityNotEmpty.message);
        }

        return Result.Ok<IndividualAddress>(new IndividualAddress({city: props.city}))
    }

    get city () : string {
        return this.props.city as string;
    }

    get stateOrProvince () : string {
        return this.props.stateOrProvince as string;
    }

    get country () : string {
        return this.props.country as string;
    }

    public changeStateOrProvince (newValue: string, oldValue: IndividualAddress) : Result<IndividualAddress> {
        if (newValue === null || newValue === undefined) {
            return Result.Fail<IndividualAddress>('');
        }

        if (newValue == oldValue.props.stateOrProvince) {
            return Result.Fail<IndividualAddress>('')
        }

        const newValueNotEmpty = Guard.AgainstEmpty(newValue, 'stateOrProvince');
        if (!newValueNotEmpty.succeeded) {
            return Result.Fail<IndividualAddress>(newValueNotEmpty.message);
        }

        const newValueNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'stateOrProvince');
        if (!newValueNotNullOrUndefinded.succeeded) {
            return Result.Fail<IndividualAddress>(newValueNotNullOrUndefinded.message);
        }

        return Result.Ok<IndividualAddress>(new IndividualAddress({ stateOrProvince: newValue, country: oldValue.props.country, city: oldValue.props.city }))
    }

    public changeCountry (newValue: string, oldValue: IndividualAddress) : Result<IndividualAddress> {
        if (newValue === null || newValue === undefined) {
            return Result.Fail<IndividualAddress>('');
        }

        if (newValue == oldValue.props.country) {
            return Result.Fail<IndividualAddress>('')
        }

        const streetNameNotEmpty = Guard.AgainstEmpty(newValue, 'country');
        if (!streetNameNotEmpty.succeeded) {
            return Result.Fail<IndividualAddress>(streetNameNotEmpty.message);
        }

        const streetNameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'country');
        if (!streetNameNotNullOrUndefinded.succeeded) {
            return Result.Fail<IndividualAddress>(streetNameNotNullOrUndefinded.message);
        }

        return Result.Ok<IndividualAddress>(new IndividualAddress({ stateOrProvince: oldValue.props.stateOrProvince, country: newValue, city: oldValue.props.city }))
    }

    public changeCity (newValue: string, oldValue: IndividualAddress) : Result<IndividualAddress> {
        if (newValue === null || newValue === undefined) {
            return Result.Fail<IndividualAddress>('');
        }

        if (newValue == oldValue.props.city) {
            return Result.Fail<IndividualAddress>('')
        }

        const cityNotEmpty = Guard.AgainstEmpty(newValue, 'city');
        if (!cityNotEmpty.succeeded) {
            return Result.Fail<IndividualAddress>(cityNotEmpty.message);
        }

        const cityNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'city');
        if (!cityNotNullOrUndefinded.succeeded) {
            return Result.Fail<IndividualAddress>(cityNotNullOrUndefinded.message);
        }

        return Result.Ok<IndividualAddress>(new IndividualAddress({ stateOrProvince: oldValue.props.stateOrProvince, country: oldValue.props.country, city: newValue }))
    }

}