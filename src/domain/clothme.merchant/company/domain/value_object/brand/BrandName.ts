import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface BrandNameProps {
    title: string;
}

export class BrandName extends ValueObject<BrandNameProps>{

    private constructor(props: BrandNameProps) {
        super(props);
    }

    public static create (props: BrandNameProps) : Result<BrandName> {
        const brandNameNullorUndefined = Guard.AgainstNullOrUndefinded(props.title, 'brandName');
        if (!brandNameNullorUndefined.succeeded) {
            return Result.Fail<BrandName>(brandNameNullorUndefined.message);
        }

        const brandNameNotEmpty = Guard.AgainstEmpty(props.title, 'brandName');
        if (!brandNameNotEmpty.succeeded) {
            return Result.Fail<BrandName>(brandNameNotEmpty.message);
        }

        return Result.Ok<BrandName>(new BrandName(props));
    }

    get title () {
        return this.props.title
    }
}