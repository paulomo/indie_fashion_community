import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface ProfileImageProps {
    image: string;
}

export class ProfileImage extends ValueObject<ProfileImageProps> {
    
    private constructor(props: ProfileImageProps) {
        super(props)
    }

    get image () {
        return this.props.image;
    }

    public static create (props: ProfileImageProps) : Result<ProfileImage> {
        const imageNotEmpty = Guard.AgainstEmpty(props.image, 'profileImage');
        if (!imageNotEmpty.succeeded) {
            return Result.Fail<ProfileImage>(imageNotEmpty.message);
        }

        const imageNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.image, 'profileImage');
        if (!imageNotNullOrUndefinded.succeeded) {
            return Result.Fail<ProfileImage>(imageNotNullOrUndefinded.message);
        }

        return Result.Ok<ProfileImage>(new ProfileImage(props))
    }

    public update(oldImage: ProfileImage, newImage: string) : Result<ProfileImage> {
        if (oldImage === null || oldImage === undefined || newImage === null || newImage === undefined) {
            return Result.Fail<ProfileImage>('');
        }
        const imageNotEmpty = Guard.AgainstEmpty(newImage, 'profileImage');
        if (!imageNotEmpty.succeeded) {
            return Result.Fail<ProfileImage>(imageNotEmpty.message);
        }

        const imageNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newImage, 'profileImage');
        if (!imageNotNullOrUndefinded.succeeded) {
            return Result.Fail<ProfileImage>(imageNotNullOrUndefinded.message);
        }

        return Result.Ok<ProfileImage>(new ProfileImage({ image: newImage }))
    }

}