import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";
import { Result } from "../../../../clothme.shared.kernel/error/Result";



interface AverageReviewProps {
    value: number;
}

export class AverageReview extends ValueObject<AverageReviewProps> {

    private constructor(props: AverageReviewProps) {
        super(props);
    }

    public static create (props: AverageReviewProps) : Result<AverageReview> {
        const countNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'averageReview');
        if (!countNullOrUndefinded.succeeded) {
            return Result.Fail<AverageReview>(countNullOrUndefinded.message);
        }
 
        const countNotNegative = Guard.AgainstNegative(props.value, 'averageReview');
        if (!countNotNegative.succeeded) {
            return Result.Fail<AverageReview>(countNotNegative.message);
        }

        return Result.Ok<AverageReview>(new AverageReview(props));
    }

    
}