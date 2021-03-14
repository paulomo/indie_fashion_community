import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";

interface EmployeeEmailProps {
    value: string;
}

export class EmployeeEmail extends ValueObject<EmployeeEmailProps> {

    private constructor (props: EmployeeEmailProps) {
        super(props);
    }

    private static isValidEmail (email: string) {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }

    private static format (email: string) : string {
        return email.trim().toLowerCase();
    }

    public static create (props: EmployeeEmailProps) : Result<EmployeeEmail> {
        const emailNotEmpty = Guard.AgainstEmpty(props.value, 'phoneNumber');
        if (!emailNotEmpty.succeeded) {
            return Result.Fail<EmployeeEmail>(emailNotEmpty.message);
        }

        if (!this.isValidEmail(props.value)) {
            return Result.Fail<EmployeeEmail>('Email address not valid');
        } else {
            return Result.Ok<EmployeeEmail>(new EmployeeEmail({ value: this.format(props.value)}));
        }
    }

    get value () : string {
        return this.props.value;
    }

    public change () {}
}

