import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";
import { ReviewId } from "../../value_object/review/ReviewId"
import { Star } from "../../value_object/review/Star";
import { ReviewText } from "../../value_object/review/ReviewText";
import { Entity } from "../../../../clothme.shared.kernel/domain/entity/Entity";
import Guid from "../../../../clothme.shared.kernel/domain/entity/Guid";


interface ReviewProps {
    star: Star
    text: ReviewText;
}

export class Review extends Entity<ReviewProps> {

    private constructor(props: ReviewProps, id?: Guid) {
        super(props);
    }

    public static create (props: ReviewProps, id?: Guid) : Result<Review> {
        const reviewNotNullOrUndefinded = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.star, argumentName: 'star'},
            {argument: props.text, argumentName: 'text'}
        ])
        if (!reviewNotNullOrUndefinded.succeeded) {
            return Result.Fail<Review>(reviewNotNullOrUndefinded.message);
        }

        const reviewTextNotEmpty = Guard.AgainstEmpty(props.text.props.content, 'text');
        const reviewStarNotLessThanZero = Guard.AgainstNegative(props.star.props.count, 'star');
        if (!reviewStarNotLessThanZero.succeeded || !reviewTextNotEmpty.succeeded) {
            return Result.Fail<Review>(reviewTextNotEmpty.message || reviewStarNotLessThanZero.message)
        }

        return Result.Ok<Review>(new Review(props))
    }

    get reviewId () : ReviewId {
        return ReviewId.create(this._id).getValue();
    }

    get star () {
        return this.props.star;
    }

    get text () {
        return this.props.text;
    }
}