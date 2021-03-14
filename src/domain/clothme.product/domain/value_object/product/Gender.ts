import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface GenderProps {
    type: string;
}

export class Gender extends ValueObject<GenderProps> {

    private constructor(props: GenderProps) {
        super(props);
    } 

    public static create (props: GenderProps) : Result<Gender> {
        const genderTypeNullOrUnderfinded = Guard.AgainstNullOrUndefinded(props.type, 'gender type');
        if (!genderTypeNullOrUnderfinded.succeeded) {
            return Result.Fail<Gender>(genderTypeNullOrUnderfinded.message);
        }

        const genderTypeEmpty = Guard.AgainstEmpty(props.type, 'gender type');
        if (!genderTypeEmpty.succeeded) {
            return Result.Fail<Gender>(genderTypeEmpty.message);
        }
        
        return Result.Ok<Gender>(new Gender(props));
    }

    public change (genderInput: string) : Result<Gender> {
        const genderTypeNullOrUnderfinded = Guard.AgainstNullOrUndefinded(genderInput, 'gender type');
        if (!genderTypeNullOrUnderfinded.succeeded) {
            return Result.Fail<Gender>(genderTypeNullOrUnderfinded.message);
        }

        const genderTypeEmpty = Guard.AgainstEmpty(genderInput, 'gender type');
        if (!genderTypeEmpty.succeeded) {
            return Result.Fail<Gender>(genderTypeEmpty.message);
        }

        if (this.props.type == genderInput) {
            return Result.Fail<Gender>("The gender you provided is the same as the current gender")
        }
        
        return Result.Ok<Gender>(new Gender({type: genderInput}));
    }

    get type () {
        return this.props.type;
    }
}