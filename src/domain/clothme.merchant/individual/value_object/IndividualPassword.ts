import ValueObject from "../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../clothme.shared.kernel/error/Result";
import { Guard, Validation } from "../../../clothme.shared.kernel/error/Guard";


interface IndidvidualPasswordProps {
    value: string;
}

export class IndividualPassword extends ValueObject<IndidvidualPasswordProps> {

    private constructor (props: IndidvidualPasswordProps) {
        super(props);
    }

    public static create (props: IndidvidualPasswordProps) : Result<IndividualPassword> {
        const passwordNotEmpty = Guard.AgainstEmpty(props.value, 'password');
        if (!passwordNotEmpty.succeeded) {
            return Result.Fail<IndividualPassword>(passwordNotEmpty.message);
        }

        if (!this.isValidPassword(props.value)) {
            return Result.Fail<IndividualPassword>('Password not valid');
        } else {
            return Result.Ok<IndividualPassword>(new IndividualPassword({ value: this.format(props.value) }));
        }
    }

    get value () {
        return this.props.value;
    }

    public change (password: string, currentPassword: IndividualPassword) : Result<IndividualPassword> {
        const passwordNotEmpty = Guard.AgainstEmpty(password, 'phoneNumber');
        if (!passwordNotEmpty.succeeded) {
            return Result.Fail<IndividualPassword>(passwordNotEmpty.message);
        }

        const isNotSameValue = Validation.isSame(currentPassword.props.value, password);
        if (!isNotSameValue.succeeded) {
            return Result.Fail<IndividualPassword>(isNotSameValue.message);
        }

        if (!IndividualPassword.isValidPassword(password)) {
            return Result.Fail<IndividualPassword>('PhoneNumber not valid');
        }

        return Result.Ok<IndividualPassword>(new IndividualPassword({ value: password }));
    }

    private static isValidPassword (email: string) {
        let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return reg.test(email);
    }

    private static format (email: string) : string {
        return email.trim().toLowerCase();
    }

}
