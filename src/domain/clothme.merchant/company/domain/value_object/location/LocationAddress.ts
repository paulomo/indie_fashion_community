import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface LocationAddressProps {
    city: string;
    provinceOrState: string;
    country: string
}

export class LocationAddress extends ValueObject<LocationAddressProps>{

    private constructor(props: LocationAddressProps) {
        super(props)
    }

    public static create (props: LocationAddressProps) : Result<LocationAddress> {
        const locationNullOrUndefinded = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.city, argumentName: 'city'},
            {argument: props.provinceOrState, argumentName: 'provinceOrState'},
            {argument: props.country, argumentName: 'country'},
        ]);
        if (!locationNullOrUndefinded.succeeded) {
            return Result.Fail<LocationAddress>(locationNullOrUndefinded.message)
        }

        const locationEmpty = Guard.AgainstEmptyBulk([
            {argument: props.city, argumentName: 'city'},
            {argument: props.provinceOrState, argumentName: 'provinceOrState'},
            {argument: props.country, argumentName: 'country'},
        ]);
        if (!locationEmpty.succeeded) {
            return Result.Fail<LocationAddress>(locationEmpty.message)
        }

        return Result.Ok<LocationAddress>(new LocationAddress(props))

    }

    get city () : string {
        return this.props.city
    }

    get provinceOrState () : string {
        return this.props.provinceOrState
    }

    get country () : string {
        return this.props.country
    }

}