import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface ProductDescriptionProps {
    text: string;
}

export class ProductDescription extends ValueObject<ProductDescriptionProps> {
    
    private constructor(props: ProductDescriptionProps) {
        super(props);
    }

    public static create (props: ProductDescriptionProps) : Result<ProductDescription> {
        const descriptionNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.text, 'productDecription');
        if (descriptionNotNullOrUndefinded.succeeded) {
            return Result.Fail<ProductDescription>(descriptionNotNullOrUndefinded.message);
        }

        const descriptionNotEmpty = Guard.AgainstEmpty(props.text, 'productDecription');
        if (descriptionNotEmpty.succeeded) {
            return Result.Fail<ProductDescription>(descriptionNotEmpty.message);
        }

        return Result.Ok<ProductDescription>(new ProductDescription(props));
    }

    get text () {
        return this.props.text;
    }

    public change (newDescription: string) : Result<ProductDescription> {
        const descriptionNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newDescription, 'productDecription');
        if (descriptionNotNullOrUndefinded.succeeded) {
            return Result.Fail<ProductDescription>(descriptionNotNullOrUndefinded.message);
        }

        const descriptionNotEmpty = Guard.AgainstEmpty(newDescription, 'productDecription');
        if (descriptionNotEmpty.succeeded) {
            return Result.Fail<ProductDescription>(descriptionNotEmpty.message);
        }

        return Result.Ok<ProductDescription>(new ProductDescription({ text: newDescription }));
    }
}