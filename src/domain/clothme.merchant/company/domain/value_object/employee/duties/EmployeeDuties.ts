import { IDuties } from "./IDuties";
import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import ValueObject from "../../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Guard } from "../../../../../../clothme.shared.kernel/error/Guard";


interface EmployeeDutiesProps {
    given: string[]; // add, read, terminate, suspend, remove, update
}

export class EmployeeDuties extends ValueObject<EmployeeDutiesProps> implements IDuties {

    private constructor(duty: string[],  props: EmployeeDutiesProps) {
        super(props)
        props.given.concat(duty)
    }

    public static set (duty: string[], props: EmployeeDutiesProps) : Result<EmployeeDuties> {
        const dutyNotEmpty = duty.length < 0;
        if (!dutyNotEmpty) {
            return Result.Fail<EmployeeDuties>('')
        }

        const dutyNotNull = Guard.AgainstNullOrUndefinded(duty, 'duty');
        if (!dutyNotNull.succeeded) {
            return Result.Fail<EmployeeDuties>(dutyNotNull.message)
        }

        return Result.Ok<EmployeeDuties>(new EmployeeDuties(duty, props))
    }

 
}