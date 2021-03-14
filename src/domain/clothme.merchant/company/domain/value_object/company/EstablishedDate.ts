import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface EstablishedDateProps {
    date: string;
}

export class EstablishedDate extends ValueObject<EstablishedDateProps> {
    
    private constructor(props: EstablishedDateProps) {
        super(props);
    }

    public static create (props: EstablishedDateProps) : Result<EstablishedDate> {
        const dateNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.date, 'establishedDate');
        if (!dateNullOrUndefinded.succeeded) {
            return Result.Fail<EstablishedDate>(dateNullOrUndefinded.message);
        }

        const dateNotEmpty = Guard.AgainstEmpty(props.date, 'establishedDate');
        if (!dateNotEmpty.succeeded) {
            return Result.Fail<EstablishedDate>(dateNotEmpty.message);
        }

        return Result.Ok<EstablishedDate>(new EstablishedDate(props));
    }

    get value () : string {
        return this.value;
    }
}