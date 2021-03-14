import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


export interface LogoProps {
    image: string;
}

export class LocationLogo extends ValueObject<LogoProps> {
    private constructor(props: LogoProps) {
        super(props)
    }

    public static create (props: LogoProps) : Result<LocationLogo> {
        const imageNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.image, 'image');
       if (!imageNullOrUndefinded.succeeded) {
           return Result.Fail<LocationLogo>(imageNullOrUndefinded.message);
       }

       const imageEmpty = Guard.AgainstEmpty(props.image, 'image');
       if (!imageEmpty.succeeded) {
           return Result.Fail<LocationLogo>(imageEmpty.message);
       }

       return Result.Ok<LocationLogo>(new LocationLogo(props));
    }

    get image () : string {
        return this.props.image
    }
}