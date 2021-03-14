import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface DateOfBirthProps {
    value: string;
}

export class DateOfBirth extends ValueObject<DateOfBirthProps> {

    private constructor(props: DateOfBirthProps) {
        super(props);
    }

    public static create (props: DateOfBirthProps) : Result<DateOfBirth> {
        const dobNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'dateOfBirth');
        if (!dobNullOrUndefinded.succeeded) {
            return Result.Fail<DateOfBirth>(dobNullOrUndefinded.message);
        }
 
        const dobNameEmpty = Guard.AgainstEmpty(props.value, 'dateOfBirth');
        if (!dobNameEmpty.succeeded) {
            return Result.Fail<DateOfBirth>(dobNameEmpty.message);
        }

        return Result.Ok<DateOfBirth>(new DateOfBirth(props));
    }

    get value () {
        return this.props.value;
    }
}