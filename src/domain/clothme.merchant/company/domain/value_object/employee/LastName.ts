import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface LastNameProps {
    value: string;
}

export class LastName extends ValueObject<LastNameProps> {

    private constructor (props: LastNameProps) {
        super(props);
    }

    public static create (props: LastNameProps) : Result<LastName> {
        const lastNameNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'lastname');
        if (!lastNameNullOrUndefinded.succeeded) {
            return Result.Fail<LastName>(lastNameNullOrUndefinded.message);
        }
 
        const lastNameEmpty = Guard.AgainstEmpty(props.value, 'lastname');
        if (!lastNameEmpty.succeeded) {
            return Result.Fail<LastName>(lastNameEmpty.message);
        }

        return Result.Ok<LastName>(new LastName(props));
    }

    get lastName () {
        return this.props.value;
    }
    
}
