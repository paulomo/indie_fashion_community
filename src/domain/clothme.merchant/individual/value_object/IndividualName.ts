import ValueObject from "../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../clothme.shared.kernel/error/Guard";


interface IndividualNameProps {
    _value: string;
}

export class IndividualName extends ValueObject<IndividualNameProps> {

    private constructor(props: IndividualNameProps) {
        super(props);
    }

    public static create (props: IndividualNameProps) : Result<IndividualName> {
        const nameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props._value, 'individualName');
        if (!nameNotNullOrUndefinded.succeeded) {
            return Result.Fail<IndividualName>(nameNotNullOrUndefinded.message);
        }

        const nameNotEmpty = Guard.AgainstEmpty(props._value, 'individualName');
        if (!nameNotEmpty.succeeded) {
            return Result.Fail<IndividualName>(nameNotEmpty.message);
        }

        return Result.Ok<IndividualName>(new IndividualName(props));
    }

    get value () {
        return this.props._value;
    }

    public change (newName: string, currentName: IndividualName) : Result<IndividualName> {
        if (currentName.props._value == newName) {
            return Result.Fail<IndividualName>(`${newName} cannot be the same with current tier`)
        }

        const nameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newName, 'individualName');
        if (!nameNotNullOrUndefinded.succeeded) {
            return Result.Fail<IndividualName>(nameNotNullOrUndefinded.message);
        }

        const nameNotEmpty = Guard.AgainstEmpty(newName, 'individualName');
        if (!nameNotEmpty.succeeded) {
            return Result.Fail<IndividualName>(nameNotEmpty.message);
        }

        return Result.Ok<IndividualName>(new IndividualName({ _value: newName }));
    }
}