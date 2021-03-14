import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard, Validation } from "../../../../../clothme.shared.kernel/error/Guard";


interface PasswordProps {
    value: string;
}

export class EmployeePassword extends ValueObject<PasswordProps> {

    private constructor (props: PasswordProps) {
        super(props);
    }

    public static create (props: PasswordProps) : Result<EmployeePassword> {
        const passwordNotEmpty = Guard.AgainstEmpty(props.value, 'password');
        if (!passwordNotEmpty.succeeded) {
            return Result.Fail<EmployeePassword>(passwordNotEmpty.message);
        }

        if (!this.isValidPassword(props.value)) {
            return Result.Fail<EmployeePassword>('Password not valid');
        } else {
            return Result.Ok<EmployeePassword>(new EmployeePassword({ value: this.format(props.value) }));
        }
    }

    get value () {
        return this.props.value;
    }

    public change (password: string, currentPassword: EmployeePassword) : Result<EmployeePassword> {
        const passwordNotEmpty = Guard.AgainstEmpty(password, 'phoneNumber');
        if (!passwordNotEmpty.succeeded) {
            return Result.Fail<EmployeePassword>(passwordNotEmpty.message);
        }

        const isNotSameValue = Validation.isSame(currentPassword.props.value, password);
        if (!isNotSameValue.succeeded) {
            return Result.Fail<EmployeePassword>(isNotSameValue.message);
        }

        if (!EmployeePassword.isValidPassword(password)) {
            return Result.Fail<EmployeePassword>('PhoneNumber not valid');
        }

        return Result.Ok<EmployeePassword>(new EmployeePassword({ value: password }));
    }

    private static isValidPassword (email: string) {
        let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return reg.test(email);
    }

    private static format (email: string) : string {
        return email.trim().toLowerCase();
    }

}
