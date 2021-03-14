import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface FirstNameProps {
    value: string;
}

export class FirstName extends ValueObject<FirstNameProps> {

    private constructor (props: FirstNameProps) {
        super(props);
    }

    public static create (props: FirstNameProps) : Result<FirstName> {
       const firstNameNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'firstname');
       if (!firstNameNullOrUndefinded.succeeded) {
           return Result.Fail<FirstName>(firstNameNullOrUndefinded.message);
       }

       const firstNameEmpty = Guard.AgainstEmpty(props.value, 'firstname');
       if (!firstNameEmpty.succeeded) {
           return Result.Fail<FirstName>(firstNameEmpty.message);
       }

       return Result.Ok<FirstName>(new FirstName(props));
    }

    get firstName () {
        return this.props.value;
    }
    
}
