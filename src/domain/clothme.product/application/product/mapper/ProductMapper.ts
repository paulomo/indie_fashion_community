import { Mapper } from "../../../../clothme.shared.kernel/infrastructure/mapper/Mapper";
import { Product } from "../../../domain/entity/product/Product";
import { ProductApplicationModel } from "../model/ProductApplicationModel";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { ProductName } from "../../../domain/value_object/product/ProductName";
import { ProductImage } from "../../../domain/value_object/product/ProductImage";
import { ProductDescription } from "../../../domain/value_object/product/ProductDescription";
import { Gender } from "../../../domain/value_object/product/Gender";
import { Price } from "../../../domain/value_object/product/Price";
import { ProductCatergory } from "../../../domain/value_object/product/ProductCatergory";
import { ProductCatergoryType } from "../../../domain/value_object/product/ProductCatergoryType";
import { Fabric } from "../../../domain/value_object/product/Fabric";
import { Returns } from "../../../domain/value_object/product/Returns";
import { Delivery } from "../../../domain/value_object/product/Delivery";
import { Tax } from "../../../domain/value_object/product/Tax";
import { LikeCount } from "../../../domain/value_object/product/LikeCount";
import { Review } from "../../../domain/entity/review/Review";
import { ReviewCount } from "../../../domain/value_object/product/ReviewCount";
import { AverageReview } from "../../../domain/value_object/product/AverageReview";
import { Discount } from "../../../domain/value_object/product/Discount";
import { Measurement } from "../../../domain/value_object/product/Measurement";
import Guid from "../../../../clothme.shared.kernel/domain/entity/Guid";
import { ReviewApplicationModel } from "../../review/model/ReviewApplicationModel";

export class ProductMapper implements Mapper<Product> {

    public static toDataModel(domainModel: Product) : ProductApplicationModel {
        return new ProductApplicationModel(
            domainModel.props.productImage.defaultImage,
            domainModel.props.productImage.imagesUrl,
            domainModel.props.name.value,
            domainModel.props.description.text,
            domainModel.props.gender.type,
            domainModel.props.measurement.measurement,
            domainModel.props.price.value.amount,
            domainModel.props.discount.discounts,
            domainModel.props.productCategory.category,
            domainModel.props.productCatergoryType.categoryType,
            domainModel.props.fabric.type,
            domainModel.props.returns.policy,
            domainModel.props.delivery.policy,
            domainModel.props.tax.percentage,
            domainModel.props.averageReview.props.value,
            domainModel.props.reviewCount.counts,
            domainModel.props.likeCount?.value || 0,
            ProductMapper.reviews(domainModel),
        )

    }


    public static toDomainModel(raw: any) : Result<Product> {
        const productNameOrError = ProductName.create({ name : raw.productName})
        const productImageOrError = ProductImage.create({ imagesUrl : raw.productImage })
        const descriptionOrError = ProductDescription.create({ text: raw.productDescription })
        const genderOrError = Gender.create({ type: raw.productGender})
        const measurementOrError = Measurement.create({measurement: raw.measurement })
        const priceOrError = Price.create({ value: raw.productPrice })
        const discountOrError = Discount.create({ discounts: raw.discounts })
        const productCategoryOrError = ProductCatergory.create({ category: raw.productCategory })
        const productCatergoryTypeOrError = ProductCatergoryType.create({ categoryType: raw.productCatergoryType })
        const fabricOrError = Fabric.create({ type: raw.fabric })
        const returnsOrError = Returns.create({ policy: raw.returnPolicy })
        const deliveryOrError = Delivery.create({ policy: raw.deliveryPolicy })
        const taxOrError = Tax.create({ percentage: raw.percentage })
        const likeCountOrError = LikeCount.create({ value: raw.likeCount })
        const reviewsOrError = Review.create({ star: raw.star, text: raw.review })
        const averageReviewOrError = AverageReview.create({ value: raw.averageReview })
        const reviewCountOrError = ReviewCount.create({ value: raw.reviewCount })

        const productOrError = Product.create({
            productImage: productImageOrError.getValue(),
            name: productNameOrError.getValue(),
            description: descriptionOrError.getValue(),
            gender: genderOrError.getValue(),
            measurement: measurementOrError.getValue(),
            price: priceOrError.getValue(),
            discount: discountOrError.getValue(),
            productCategory: productCategoryOrError.getValue(),
            productCatergoryType: productCatergoryTypeOrError.getValue(),
            fabric: fabricOrError.getValue(),
            returns: returnsOrError.getValue(),
            delivery: deliveryOrError.getValue(),
            tax: taxOrError.getValue(),
            likeCount: likeCountOrError.getValue(),
            reviews: [reviewsOrError.getValue()],
            averageReview: averageReviewOrError.getValue(),
            reviewCount: reviewCountOrError.getValue()
        }, new Guid(raw.productId));

        if (productOrError.isFailure) return Result.Fail<Product>("")

        return Result.Ok<Product>(productOrError.getValue())
    }

    private static reviews(data: Product) : [ReviewApplicationModel] {
        let index = 0
        const reviewData = data.props.reviews || 0
        let dataList: [ReviewApplicationModel] = [new ReviewApplicationModel(0.0, "")] 
        while (reviewData > index) {
            const newReview = new ReviewApplicationModel(
                data.reviews[index].props.star.value, 
                data.reviews[index].props.text.content
                )
            dataList.push(newReview)
            index += 1
        }
        return dataList
    }
}