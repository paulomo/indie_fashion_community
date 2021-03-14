import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface LogoProps {
    image: string;
}

export class Logo extends ValueObject<LogoProps> {

    private constructor(props: LogoProps) {
        super(props);
    }

    get Image () {
        return this.props.image;
    }

    public static set (props: LogoProps) : Result<Logo> {
        const imageNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.image, 'logo');
        if (!imageNotNullOrUndefinded.succeeded) {
            return Result.Fail<Logo>(imageNotNullOrUndefinded.message);
        }

        const imageNotEmpty = Guard.AgainstEmpty(props.image, 'logo');
        if (!imageNotEmpty.succeeded) {
            return Result.Fail<Logo>(imageNotEmpty.message);
        }

        return Result.Ok<Logo>(new Logo(props))
    }

    public change (oldImage: string, newImage: string) : Result<Logo> {
        const oldImageNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(oldImage, 'currentImage');
        if (!oldImageNotNullOrUndefinded.succeeded) {
            return Result.Fail<Logo>(oldImageNotNullOrUndefinded.message);
        }

        const newImageNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newImage, 'newImage');
        if (!newImageNotNullOrUndefinded.succeeded) {
            return Result.Fail<Logo>(newImageNotNullOrUndefinded.message);
        }

        const oldImageNotEmpty = Guard.AgainstEmpty(oldImage, 'currentImage');
        if (!oldImageNotEmpty.succeeded) {
            return Result.Fail<Logo>(oldImageNotEmpty.message);
        }

        const newImageNotEmpty = Guard.AgainstEmpty(newImage, 'newImage');
        if (!newImageNotEmpty.succeeded) {
            return Result.Fail<Logo>(newImageNotEmpty.message);
        }

        return Result.Ok<Logo>(new Logo({image: newImage}));
    }

    public toString (props: LogoProps) : string {
        return String(props);
    }
}