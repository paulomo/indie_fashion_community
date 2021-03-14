import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";

interface GenderProps {
    type: string;
}

export class BrandGender extends ValueObject<GenderProps> {

    private constructor(props: GenderProps) {
        super(props);
    }

    public static create (props: GenderProps) : Result<BrandGender> {
        const genderEmpty = Guard.AgainstEmpty(props.type, 'gender');
        if (!genderEmpty.succeeded) {
            return Result.Fail<BrandGender>(genderEmpty.message);
        }

        const genderNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.type, 'gender');
        if (!genderNullOrUndefinded.succeeded) {
            return Result.Fail<BrandGender>(genderNullOrUndefinded.message)
        }

        return Result.Ok<BrandGender>(new BrandGender(props));
    }

    get type () {
        return this.props.type;
    }

    public change (newGender: string, currentGender: BrandGender) : Result<BrandGender> {
        if (currentGender.props.type == newGender) {
            return Result.Fail<BrandGender>("")
        }

        const genderEmpty = Guard.AgainstEmpty(newGender, 'gender');
        if (!genderEmpty.succeeded) {
            return Result.Fail<BrandGender>(genderEmpty.message);
        }

        const genderNullOrUndefinded = Guard.AgainstNullOrUndefinded(newGender, 'gender');
        if (!genderNullOrUndefinded.succeeded) {
            return Result.Fail<BrandGender>(genderNullOrUndefinded.message)
        }

        return Result.Ok<BrandGender>(new BrandGender({ type: newGender }));
    }
}