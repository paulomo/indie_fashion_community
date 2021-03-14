import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface CompanyNameProps {
    value: string;
}

export class CompanyName extends ValueObject<CompanyNameProps> {

    private constructor(props: CompanyNameProps) {
        super(props);
    }

    public static create (props: CompanyNameProps) : Result<CompanyName> {
        const nameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'companyName');
        if (!nameNotNullOrUndefinded.succeeded) {
            return Result.Fail<CompanyName>(nameNotNullOrUndefinded.message as "");
        }

        const nameNotEmpty = Guard.AgainstEmpty(props.value, 'companyName');
        if (!nameNotEmpty.succeeded) {
            return Result.Fail("nameNotEmpty.message");
        }

        return Result.Ok<CompanyName>(new CompanyName(props));
    }

    public value () {
        return this.props.value;
    }

    public change (newName: string, currentName: CompanyName) : Result<CompanyName> {
        if (currentName.props.value == newName) {
            return Result.Fail("")
        }

        const nameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newName, 'companyName');
        if (!nameNotNullOrUndefinded.succeeded) {
            return Result.Fail<CompanyName>(nameNotNullOrUndefinded.message);
        }

        const nameNotEmpty = Guard.AgainstEmpty(newName, 'companyName');
        if (!nameNotEmpty.succeeded) {
            return Result.Fail<CompanyName>(nameNotEmpty.message);
        }

        return Result.Ok<CompanyName>(new CompanyName({ value: newName }));
    }
}