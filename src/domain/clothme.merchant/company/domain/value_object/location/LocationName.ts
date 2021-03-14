import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";


interface LocationNameProps {
    value: string;
}

export class LocationName extends ValueObject<LocationNameProps> {

    private constructor(props: LocationNameProps) {
        super(props);
    }

    public static create (props: LocationNameProps) : Result<LocationName> {
        const locationNameEmpty = Guard.AgainstEmpty(props.value, 'locationName');
        if (locationNameEmpty.succeeded) {
            return Result.Fail<LocationName>(locationNameEmpty.message);
        }

        const locationNameNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'locationName');
        if (locationNameNullOrUndefinded.succeeded) {
            return Result.Fail<LocationName>(locationNameNullOrUndefinded.message);
        }

        return Result.Ok<LocationName>(new LocationName(props));
    }

    get value () {
        return this.props.value
    }

    public change (newLocationName: string, currenctLocationName: LocationName) : Result<LocationName> {
        if (currenctLocationName.props.value == newLocationName) {
            return Result.Fail<LocationName>("Same name not allowed");
        }

        const locationNameEmpty = Guard.AgainstEmpty(newLocationName, 'locationName');
        if (locationNameEmpty.succeeded) {
            return Result.Fail<LocationName>(locationNameEmpty.message);
        }

        const locationNameNullOrUndefinded = Guard.AgainstNullOrUndefinded(newLocationName, 'locationName');
        if (locationNameNullOrUndefinded.succeeded) {
            return Result.Fail<LocationName>(locationNameNullOrUndefinded.message);
        }

        return Result.Ok<LocationName>(new LocationName({ value: newLocationName }));
    }
}