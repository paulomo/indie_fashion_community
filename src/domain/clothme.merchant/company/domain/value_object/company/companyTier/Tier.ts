import ValueObject from "../../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../../clothme.shared.kernel/error/Guard";

export interface CompanyTierProps {
    value: string;
}

export class CompanyTier extends ValueObject<CompanyTierProps> {

    private constructor(props: CompanyTierProps) {
        super(props);
    }

    public static create (props: CompanyTierProps) : Result<CompanyTier> {
        const tierNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.value, 'tier');
        if (!tierNotNullOrUndefinded.succeeded) {
            return Result.Fail<CompanyTier>(tierNotNullOrUndefinded.message as "");
        }

        const tierNotEmpty = Guard.AgainstEmpty(props.value, 'tier');
        if (!tierNotEmpty.succeeded) {
            return Result.Fail("nameNotEmpty.message");
        }

        return Result.Ok<CompanyTier>(new CompanyTier(props));
    }

    public tier () {
        return this.props.value;
    }
    
}