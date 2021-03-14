import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface ProductImageProps {
    imagesUrl: [string];
}

export class ProductImage extends ValueObject<ProductImageProps> {
    
    private static MAXIMUM_IMAGE_COUNT: number = 7;
    private defaultImageUrl: string

    private constructor(props: ProductImageProps) {
        super(props);
        this.defaultImageUrl = props.imagesUrl.shift() || ""
    }
    
    public static create (props: ProductImageProps) : Result<ProductImage> {
        const imageNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.imagesUrl, 'product image');
        if (imageNotNullOrUndefinded.succeeded) {
            return Result.Fail<ProductImage>(imageNotNullOrUndefinded.message);
        }

        return Result.Ok<ProductImage>(new ProductImage(props))
    }

    get imagesUrl () {
        return this.props.imagesUrl;
    }

    get defaultImage () {
        return this.defaultImageUrl
    }


    public static change(oldImage: string, newImage: string) {

    }

    public static reSizeImage(file:File, maxWidth:number, maxHeight:number) : Promise<Blob> {
        return new Promise((resolve, reject) => {})
    }
}