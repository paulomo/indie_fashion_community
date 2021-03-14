import { ReviewApplicationModel } from "../../review/model/ReviewApplicationModel";

export class ProductApplicationModel {
    defaultImage: string;
    productImages: [string];
    name: string;
    description: string;
    gender: string;
    measurement: {};
    price: number;
    discount: [{}];
    productCategory: string;
    productCatergoryType: string;
    fabric: string;
    returns: string;
    delivery: string;
    tax: number;
    likeCount?: number;
    reviews?: [ReviewApplicationModel];
    averageReview: number;
    reviewCount: number;

    constructor(
        defaultImage: string,
        productImages: [string],
        name: string,
        description: string,
        gender: string,
        measurement: {},
        price: number,
        discount: [{}],
        productCategory: string,
        productCatergoryType: string,
        fabric: string,
        returns: string,
        delivery: string,
        tax: number,
        averageReview: number,
        reviewCount: number,
        likeCount?: number,
        reviews?: [ReviewApplicationModel],
    ) {
        this.defaultImage = defaultImage
        this.productImages = productImages
        this.name = name
        this.description = description
        this.gender = gender
        this.measurement = measurement
        this.price = price
        this.discount = discount
        this.productCategory = productCategory
        this.productCatergoryType = productCatergoryType
        this.fabric = fabric
        this.returns = returns
        this.delivery = delivery
        this.tax = tax
        this.averageReview = averageReview
        this.reviewCount = reviewCount
        this.likeCount = likeCount
        this.reviews =  reviews
    }

}

