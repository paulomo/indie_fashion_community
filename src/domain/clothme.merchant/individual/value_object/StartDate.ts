import ValueObject from "../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../clothme.shared.kernel/error/Guard";


interface StartDateProps {
    date: string;
}

export class StartDate extends ValueObject<StartDateProps> {

    private constructor(props: StartDateProps) {
        super(props);
    }

    public static create (props: StartDateProps) : Result<StartDate> {
        const dateNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.date, 'date');
        if (!dateNotNullOrUndefinded.succeeded) {
            return Result.Fail<StartDate>(dateNotNullOrUndefinded.message);
        }

        const dateNotEmpty = Guard.AgainstEmpty(props.date, 'date');
        if (!dateNotEmpty.succeeded) {
            return Result.Fail<StartDate>(dateNotEmpty.message);
        }

        return Result.Ok<StartDate>(new StartDate(props));
    }

    get value () {
        return this.props.date;
    }

    public change (newDate: string, currentDate: StartDate) : Result<StartDate> {
        if (currentDate.props.date == newDate) {
            return Result.Fail<StartDate>("")
        }

        const nameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newDate, 'date');
        if (!nameNotNullOrUndefinded.succeeded) {
            return Result.Fail<StartDate>(nameNotNullOrUndefinded.message);
        }

        const nameNotEmpty = Guard.AgainstEmpty(newDate, 'date');
        if (!nameNotEmpty.succeeded) {
            return Result.Fail<StartDate>(nameNotEmpty.message);
        }

        return Result.Ok<StartDate>(new StartDate({ date: newDate }));
    }
    
}