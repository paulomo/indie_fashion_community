import { AggregateRoot } from "../../../../clothme.shared.kernel/domain/entity/AggregateRoot";
import Guid from "../../../../clothme.shared.kernel/domain/entity/Guid";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { ProductId } from "../../value_object/product/ProductId";
import { ProductName } from "../../value_object/product/ProductName";
import { ProductDescription } from "../../value_object/product/ProductDescription";
import { Gender } from "../../value_object/product/Gender";
import { Price } from "../../value_object/product/Price";
import { Fabric } from "../../value_object/product/Fabric";
import { Tax } from "../../value_object/product/Tax";
import { Returns } from "../../value_object/product/Returns";
import { Delivery } from "../../value_object/product/Delivery";
import { ProductCatergory } from "../../value_object/product/ProductCatergory";
import { ProductImage } from "../../value_object/product/ProductImage";
import { ProductCatergoryType } from "../../value_object/product/ProductCatergoryType";
import { Review } from "../../entity/review/Review";
import { LikeCount } from "../../value_object/product/LikeCount";
import { ReviewCount } from "../../value_object/product/ReviewCount";
import { AverageReview } from "../../value_object/product/AverageReview";
import { Measurement } from "../../value_object/product/Measurement";
import { Discount } from "../../value_object/product/Discount";



interface ProductProps {
    productImage: ProductImage;
    name: ProductName;
    description: ProductDescription;
    gender: Gender;
    measurement: Measurement;
    price: Price;
    discount: Discount;
    productCategory: ProductCatergory;
    productCatergoryType: ProductCatergoryType;
    fabric: Fabric;
    returns: Returns;
    delivery: Delivery;
    tax: Tax;
    likeCount?: LikeCount;
    reviews?: [Review];
    averageReview: AverageReview;
    reviewCount: ReviewCount;
}

export class Product extends AggregateRoot<ProductProps> {

    private constructor(props: ProductProps, id?: Guid) {
        super(props, id);
    }

    public static create(props: ProductProps, id?: Guid) : Result<Product> {
        return Result.Ok<Product>(new Product(props, id)) 
    }

    get productId () : ProductId {
        return ProductId.create(this._id).getValue()
    }

    get productImage() : ProductImage {
        return this.props.productImage
    }

    get name() { return this.props.name }

    get description() { return this.props.description }

    get gender() : Gender {
        return this.props.gender
    }
    get measurement() : Measurement {
        return this.props.measurement
    }
    get price() : Price {
        return this.props.price
    }
    get discount() : Discount {
        return this.props.discount
    }
    get productCategory() : ProductCatergory {
        return this.props.productCategory
    }
    get productCatergoryType() : ProductCatergoryType {
        return this.props.productCatergoryType
    }
    get fabric() : Fabric {
        return this.props.fabric
    }
    get returns() : Returns {
        return this.props.returns
    }
    get delivery() : Delivery {
        return this.props.delivery
    }
    get tax() : Tax {
        return this.props.tax
    }
    get likeCount() : LikeCount {
        return this.props.likeCount as LikeCount 
    }
    get reviews() : [Review] {
        return this.props.reviews as [Review]
    }
    get averageReview() : AverageReview {
        return this.props.averageReview
    }
    get reviewCount() : ReviewCount {
        return this.props.reviewCount
    }

    
} 