import ValueObject from "../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../clothme.shared.kernel/error/Guard";


interface IndividualImageProps {
    image: string;
}

export class IndividualImage extends ValueObject<IndividualImageProps> {
    
    private constructor(props: IndividualImageProps) {
        super(props)
    }

    get image () {
        return this.props.image;
    }

    public static create (props: IndividualImageProps) : Result<IndividualImage> {
        const imageNotEmpty = Guard.AgainstEmpty(props.image, 'profileImage');
        if (!imageNotEmpty.succeeded) {
            return Result.Fail<IndividualImage>(imageNotEmpty.message);
        }

        const imageNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.image, 'profileImage');
        if (!imageNotNullOrUndefinded.succeeded) {
            return Result.Fail<IndividualImage>(imageNotNullOrUndefinded.message);
        }

        return Result.Ok<IndividualImage>(new IndividualImage(props))
    }

    public update(oldImage: IndividualImage, newImage: string) : Result<IndividualImage> {
        if (oldImage === null || oldImage === undefined || newImage === null || newImage === undefined) {
            return Result.Fail<IndividualImage>('');
        }
        const imageNotEmpty = Guard.AgainstEmpty(newImage, 'profileImage');
        if (!imageNotEmpty.succeeded) {
            return Result.Fail<IndividualImage>(imageNotEmpty.message);
        }

        const imageNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newImage, 'profileImage');
        if (!imageNotNullOrUndefinded.succeeded) {
            return Result.Fail<IndividualImage>(imageNotNullOrUndefinded.message);
        }

        return Result.Ok<IndividualImage>(new IndividualImage({ image: newImage }))
    }

}