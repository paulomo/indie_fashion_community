import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";



interface LaunchDateProps {
    date: string;
}

export class BrandLaunchDate extends ValueObject<LaunchDateProps> {

    private constructor(props: LaunchDateProps) {
        super(props);
    }

    public static create (props: LaunchDateProps) : Result<BrandLaunchDate> {
        const dateNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.date, 'date');
        if (!dateNotNullOrUndefinded.succeeded) {
            return Result.Fail<BrandLaunchDate>(dateNotNullOrUndefinded.message);
        }

        const dateNotEmpty = Guard.AgainstEmpty(props.date, 'date');
        if (!dateNotEmpty.succeeded) {
            return Result.Fail<BrandLaunchDate>(dateNotEmpty.message);
        }

        return Result.Ok<BrandLaunchDate>(new BrandLaunchDate(props));
    }

    public value () {
        return this.props.date;
    }

    public change (newDate: string, currentDate: BrandLaunchDate) : Result<BrandLaunchDate> {
        if (currentDate.props.date == newDate) {
            return Result.Fail<BrandLaunchDate>("")
        }

        const nameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newDate, 'date');
        if (!nameNotNullOrUndefinded.succeeded) {
            return Result.Fail<BrandLaunchDate>(nameNotNullOrUndefinded.message);
        }

        const nameNotEmpty = Guard.AgainstEmpty(newDate, 'date');
        if (!nameNotEmpty.succeeded) {
            return Result.Fail<BrandLaunchDate>(nameNotEmpty.message);
        }

        return Result.Ok<BrandLaunchDate>(new BrandLaunchDate({ date: newDate }));
    }

}