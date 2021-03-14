import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface ProductCatergoryTypeProps {
    categoryType: string;
}

export class ProductCatergoryType  extends ValueObject<ProductCatergoryTypeProps> {

    private constructor(props: ProductCatergoryTypeProps) {
        super(props);
    }

    public static create(props: ProductCatergoryTypeProps) : Result<ProductCatergoryType> {
        const productCategoryTypeNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.categoryType, 'productCategoryType');
        if (!productCategoryTypeNullOrUndefinded.succeeded) {
            return Result.Fail<ProductCatergoryType>(productCategoryTypeNullOrUndefinded.message);
        }

        const productCategoryTypeNotEmpty = Guard.AgainstEmpty(props.categoryType, 'productCategoryType');
        if (!productCategoryTypeNotEmpty.succeeded) {
            return Result.Fail<ProductCatergoryType>(productCategoryTypeNotEmpty.message);
        }

        return Result.Ok<ProductCatergoryType>(new ProductCatergoryType(props));
    }

    get categoryType () {
        return this.props.categoryType
    }

    public change (newCategoryType: string) : Result<ProductCatergoryType> {
        const productCategoryTypeNullOrUndefinded = Guard.AgainstNullOrUndefinded(newCategoryType, 'productCategoryType');
        if (!productCategoryTypeNullOrUndefinded.succeeded) {
            return Result.Fail<ProductCatergoryType>(productCategoryTypeNullOrUndefinded.message);
        }

        const productCategoryTypeNotEmpty = Guard.AgainstEmpty(newCategoryType, 'productCategoryType');
        if (!productCategoryTypeNotEmpty.succeeded) {
            return Result.Fail<ProductCatergoryType>(productCategoryTypeNotEmpty.message);
        }

        return Result.Ok<ProductCatergoryType>(new ProductCatergoryType({ categoryType: newCategoryType }));
    }
}