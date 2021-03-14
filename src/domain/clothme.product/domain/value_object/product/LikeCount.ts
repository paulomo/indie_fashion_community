import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface LikeCountProps {
    value: number;
}

export class LikeCount extends ValueObject<LikeCountProps> {

    private constructor(props: LikeCountProps) {
        super(props);
    }

    public static create (props: LikeCountProps) : Result<LikeCount> {
        const countNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'count');
        if (!countNullOrUndefinded.succeeded) {
            return Result.Fail<LikeCount>(countNullOrUndefinded.message);
        }
 
        const countNotNegative = Guard.AgainstNegative(props.value, 'count');
        if (!countNotNegative.succeeded) {
            return Result.Fail<LikeCount>(countNotNegative.message);
        }

        return Result.Ok<LikeCount>(new LikeCount(props));
    }

    get value () {
        return this.props.value;
    }

    // public change (newValue: number, oldValue: LikeCount) : Result<LikeCount> {
    //     if (newValue == oldValue.props.value) {
    //         return Result.Fail<LikeCount>("");
    //     }

    //     const countNullOrUndefinded = Guard.AgainstNullOrUndefinded(newValue, 'count');
    //     if (!countNullOrUndefinded.succeeded) {
    //         return Result.Fail<LikeCount>(countNullOrUndefinded.message);
    //     }
 
    //     const countNotNegative = Guard.AgainstNegative(newValue, 'count');
    //     if (!countNotNegative.succeeded) {
    //         return Result.Fail<LikeCount>(countNotNegative.message);
    //     }

    //     return Result.Ok<LikeCount>(new LikeCount({ value: newValue }));
    // }
}