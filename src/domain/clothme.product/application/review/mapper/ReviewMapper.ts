import { Mapper } from "../../../../clothme.shared.kernel/infrastructure/mapper/Mapper";
import { Review } from "../../../domain/entity/review/Review";
import { ReviewApplicationModel } from "../model/ReviewApplicationModel";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Star } from "../../../domain/value_object/review/Star";
import { ReviewText } from "../../../domain/value_object/review/ReviewText";
import Guid from "../../../../clothme.shared.kernel/domain/entity/Guid";

export class ReviewMapper implements Mapper<Review> {

    public static toDataModel(domainModel: Review) : ReviewApplicationModel {
        return new ReviewApplicationModel(
            domainModel.star.value,
            domainModel.text.content
        )
    }

    public static toDomainModel(raw: any) : Result<Review> {
        const starOrError = Star.create({ count: raw.starCount })
        const reviewTextOrError = ReviewText.create({ content: raw.reviewText })

        const reviewOrError = Review.create({
                star: starOrError.getValue(),
                text: reviewTextOrError.getValue()
            }, new Guid(raw.reviewId))
        
        if (reviewOrError.isFailure) return Result.Fail<Review>("")

        return Result.Ok<Review>(reviewOrError.getValue())    
    }
}