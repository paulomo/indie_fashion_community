import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface ProductNameProps {
    name: string;
}

export class ProductName extends ValueObject<ProductNameProps> {

    private constructor(props: ProductNameProps) {
        super(props);
    }

    public static create (props: ProductNameProps) : Result<ProductName> {
        const productNameNotNullOrUndefined = Guard.AgainstNullOrUndefinded(props.name, 'productName');
        if (!productNameNotNullOrUndefined.succeeded) {
            return Result.Fail<ProductName>(productNameNotNullOrUndefined.message);
        }

        const productNameNotEmpty = Guard.AgainstEmpty(props.name, 'productName');
        if (!productNameNotEmpty.succeeded) {
            return Result.Fail<ProductName>(productNameNotEmpty.message);
        } 

        return Result.Ok<ProductName>(new ProductName(props));
    }

    get value () {
        return this.props.name;
    }

    public change (newName: string) : Result<ProductName> {
        const productNameNotNullOrUndefined = Guard.AgainstNullOrUndefinded(newName, 'productName');
        if (!productNameNotNullOrUndefined.succeeded) {
            return Result.Fail<ProductName>(productNameNotNullOrUndefined.message);
        }

        const productNameNotEmpty = Guard.AgainstEmpty(newName, 'productName');
        if (!productNameNotEmpty.succeeded) {
            return Result.Fail<ProductName>(productNameNotEmpty.message);
        } 

        return Result.Ok<ProductName>(new ProductName({ name: newName }));
    }
}