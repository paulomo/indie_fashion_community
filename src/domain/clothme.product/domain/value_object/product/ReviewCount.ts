import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";


interface ReviewCountProps {
    value: number;
}

export class ReviewCount extends ValueObject<ReviewCountProps> {

    private constructor(props: ReviewCountProps) {
        super(props);
    }

    public static create(props: ReviewCountProps) : Result<ReviewCount> {
        return Result.Ok<ReviewCount>(new ReviewCount(props))
    }

    get counts() : number {
        return this.props.value
    }
}