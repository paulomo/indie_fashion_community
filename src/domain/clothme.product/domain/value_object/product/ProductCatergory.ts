import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface ProductCategoryProps {
    category: string;
}

export class ProductCatergory extends ValueObject<ProductCategoryProps> {

    private constructor(props: ProductCategoryProps) {
        super(props);
    }

    public static create (props: ProductCategoryProps) : Result<ProductCatergory> {
        const productCategoryNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.category, 'productCategory');
        if (!productCategoryNullOrUndefinded.succeeded) {
            return Result.Fail<ProductCatergory>(productCategoryNullOrUndefinded.message);
        }

        const productCategoryNotEmpty = Guard.AgainstEmpty(props.category, 'productCategory');
        if (!productCategoryNotEmpty.succeeded) {
            return Result.Fail<ProductCatergory>(productCategoryNotEmpty.message);
        }

        return Result.Ok<ProductCatergory>(new ProductCatergory({ category: props.category }));
        
    }

    get category () {
        return this.props.category
    }

    public change (newCategory: string) : Result<ProductCatergory> {
        const productCategoryNullOrUndefinded = Guard.AgainstNullOrUndefinded(newCategory, 'productCategory');
        if (!productCategoryNullOrUndefinded.succeeded) {
            return Result.Fail<ProductCatergory>(productCategoryNullOrUndefinded.message);
        }

        const productCategoryNotEmpty = Guard.AgainstEmpty(newCategory, 'productCategory');
        if (!productCategoryNotEmpty.succeeded) {
            return Result.Fail<ProductCatergory>(productCategoryNotEmpty.message);
        }

        return Result.Ok<ProductCatergory>(new ProductCatergory({ category: newCategory }));
    }
}