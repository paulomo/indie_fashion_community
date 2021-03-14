import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface PositionProps {
    value: string;
}

export class EmployeePosition extends ValueObject<PositionProps> {

    private constructor (props: PositionProps) {
        super(props);
    }

    public static create (props: PositionProps) : Result<EmployeePosition> {
        const nullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'position');
        if (!nullOrUndefinded.succeeded) {
            return Result.Fail<EmployeePosition>(nullOrUndefinded.message);
        }
 
        const positionEmpty = Guard.AgainstEmpty(props.value, 'position');
        if (!positionEmpty.succeeded) {
            return Result.Fail<EmployeePosition>(positionEmpty.message);
        }

        return Result.Ok<EmployeePosition>(new EmployeePosition(props));
    }

}
