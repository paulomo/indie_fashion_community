import ValueObject from "../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../clothme.shared.kernel/error/Result";
import { Guard, Validation } from "../../../clothme.shared.kernel/error/Guard";

interface IndividualEmailProps {
    _value: string;
}

export class IndividualEmail extends ValueObject<IndividualEmailProps> {

    private constructor (props: IndividualEmailProps) {
        super(props);
    }

    private static isValidEmail (email: string) {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }

    private static format (email: string) : string {
        return email.trim().toLowerCase();
    }

    public static create(props: IndividualEmailProps) : Result<IndividualEmail> {
        const emailNotEmpty = Guard.AgainstEmpty(props._value, 'phoneNumber');
        if (!emailNotEmpty.succeeded) {
            return Result.Fail<IndividualEmail>(emailNotEmpty.message);
        }

        if (!this.isValidEmail(props._value)) {
            return Result.Fail<IndividualEmail>('Email address not valid');
        } else {
            return Result.Ok<IndividualEmail>(new IndividualEmail({ _value: this.format(props._value)}));
        }
    }

    get value () : string {
        return this.props._value;
    }

    public change (phoneNumber: string, currentPhoneNumber: IndividualEmail) : Result<IndividualEmail> {
        const phoneNumberNotEmpty = Guard.AgainstEmpty(phoneNumber, 'phoneNumber');
        if (!phoneNumberNotEmpty.succeeded) {
            return Result.Fail<IndividualEmail>(phoneNumberNotEmpty.message);
        }

        const isNotSameValue = Validation.isSame(currentPhoneNumber.props._value, phoneNumber);
        if (!isNotSameValue.succeeded) {
            return Result.Fail<IndividualEmail>(isNotSameValue.message);
        }

        if (!IndividualEmail.isValidEmail(phoneNumber)) {
            return Result.Fail<IndividualEmail>('PhoneNumber not valid');
        }

        return Result.Ok<IndividualEmail>(new IndividualEmail({ _value: phoneNumber }));
    }
    
}

