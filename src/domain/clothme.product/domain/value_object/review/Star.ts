import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface StarProps {
    count: number;
}

export class Star extends ValueObject<StarProps> {

    private static MIN_STAR = 1;
    private static MAX_STAR = 5;

    private constructor(props: StarProps) {
        super(props);
    }

    public static create (props: StarProps) : Result<Star> {
        const ratingNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.count, 'rating');
        if (!ratingNullOrUndefinded.succeeded) {
            return Result.Fail<Star>(ratingNullOrUndefinded.message);
        }

        const ratingZero = Guard.AgainstZero(props.count, 'rating');
        if (!ratingZero.succeeded) {
            return Result.Fail<Star>(ratingZero.message);
        }
 
        const ratingMinResult = Guard.AgainstLessThan(this.MIN_STAR, props.count);
        if (!ratingMinResult.succeeded) {
            return Result.Fail<Star>(ratingMinResult.message);
        }

        const ratingMaxResult = Guard.AgainstGreaterThan(this.MAX_STAR, props.count);
        if (!ratingMaxResult.succeeded) {
            return Result.Fail<Star>(ratingMaxResult.message);
        }

        return Result.Ok<Star>(new Star(props));
    }

    get value () {
        return this.props.count;
    }

}