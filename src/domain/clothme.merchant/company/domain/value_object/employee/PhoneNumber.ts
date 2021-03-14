import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard, Validation } from "../../../../../clothme.shared.kernel/error/Guard";


interface PhoneNumberProps {
    _value: string;
}

export class PhoneNumber extends ValueObject<PhoneNumberProps> {

    private constructor (props: PhoneNumberProps) {
        super(props);
    }

    private static isValidPhone (phone: string) {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(phone);
    }

    private static format (phone: string) : string {
        return phone.trim().toLowerCase();
    }

    public static create (props: PhoneNumberProps) : Result<PhoneNumber> {
        const phoneNumberNotEmpty = Guard.AgainstEmpty(props._value, 'phoneNumber');
        if (!phoneNumberNotEmpty.succeeded) {
            return Result.Fail<PhoneNumber>(phoneNumberNotEmpty.message);
        }

        if (!this.isValidPhone(props._value)) {
            return Result.Fail<PhoneNumber>('PhoneNumber not valid');
        } else {
            return Result.Ok<PhoneNumber>(new PhoneNumber({ _value: this.format(props._value)}));
        }
    }

    get value () : string {
        return this.props._value;
    }

    public change (phoneNumber: string, currentPhoneNumber: PhoneNumber) : Result<PhoneNumber> {
        const phoneNumberNotEmpty = Guard.AgainstEmpty(phoneNumber, 'phoneNumber');
        if (!phoneNumberNotEmpty.succeeded) {
            return Result.Fail<PhoneNumber>(phoneNumberNotEmpty.message);
        }

        const isNotSameValue = Validation.isSame(currentPhoneNumber.props._value, phoneNumber);
        if (!isNotSameValue.succeeded) {
            return Result.Fail<PhoneNumber>(isNotSameValue.message);
        }

        if (!PhoneNumber.isValidPhone(phoneNumber)) {
            return Result.Fail<PhoneNumber>('PhoneNumber not valid');
        }

        return Result.Ok<PhoneNumber>(new PhoneNumber({ _value: phoneNumber }));
    }
}
