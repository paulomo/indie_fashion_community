import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface DateAddedProps {
    date: string;
}

export class DateAdded extends ValueObject<DateAddedProps> {
    
    private constructor(props: DateAddedProps) {
        super(props);
    }

    public static create(props: DateAddedProps) : Result<DateAdded> {
        const dateNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.date, 'DateAdded');
        if (!dateNullOrUndefinded.succeeded) {
            return Result.Fail<DateAdded>(dateNullOrUndefinded.message);
        }

        const dateNotEmpty = Guard.AgainstEmpty(props.date, 'DateAdded');
        if (!dateNotEmpty.succeeded) {
            return Result.Fail<DateAdded>(dateNotEmpty.message);
        }

        return Result.Ok<DateAdded>(new DateAdded(props));
    }

    get value () : string {
        return this.value;
    }
}