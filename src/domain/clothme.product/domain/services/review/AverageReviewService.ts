import { ReviewCount } from "../../value_object/product/ReviewCount";
import { Review } from "../../../domain/entity/review/Review";
import { AverageReview } from "../../value_object/product/AverageReview";
import { Result } from "../../../../clothme.shared.kernel/error/Result";


export class AverageReviewService {

    // public calculate (ratingCount: ReviewCount, reviews: Review) : Result<AverageReview> {
    //     let oneStar: number = 0, twoStar: number = 0, threeStar: number = 0, fourStar: number = 0, fiveStar: number = 0;

    //     if (reviews.props.star.props.count == 1) oneStar += 1

    //     if (reviews.props.star.props.count == 2) twoStar += 1;

    //     if (reviews.props.star.props.count == 3) threeStar += 1;

    //     if (reviews.props.star.props.count == 4) fourStar += 1;

    //     if (reviews.props.star.props.count == 5) fiveStar += 1;
        
    //     const newAverageRating : number = ratingCount.counts / star;
    //     return Result.Ok<AverageReview>(AverageReview.create());
    // }
}