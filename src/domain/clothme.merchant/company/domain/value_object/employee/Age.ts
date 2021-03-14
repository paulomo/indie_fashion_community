import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";
import { DateOfBirth } from "./DateOfBirth";


interface AgeProps {
    dateOfBirth: string;
}

export class Age extends ValueObject<AgeProps> {
    
    private value: string;

    private constructor(props: AgeProps) {
        super(props);
        this.value = props.dateOfBirth
    }

    public static create (props: AgeProps) : Result<Age> {
        const dobNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.dateOfBirth, 'dateOfBirth');
        if (!dobNullOrUndefinded.succeeded) {
            return Result.Fail<Age>(dobNullOrUndefinded.message);
        }

        var today = new Date();
        var birthDate = new Date(props.dateOfBirth);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
            
        return Result.Ok<Age>()

    }

}