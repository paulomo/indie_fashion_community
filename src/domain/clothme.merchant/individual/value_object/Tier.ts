import ValueObject from "../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../clothme.shared.kernel/error/Guard";


interface TierProps {
    _value: string;
}

export class Tier extends ValueObject<TierProps> {

    private constructor(props: TierProps) {
        super(props);
    }

    public static create(props: TierProps) : Result<Tier> {
        const dateNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(props._value, 'value');
        if (!dateNotNullOrUndefinded.succeeded) {
            return Result.Fail<Tier>(dateNotNullOrUndefinded.message);
        }

        const dateNotEmpty = Guard.AgainstEmpty(props._value, 'value');
        if (!dateNotEmpty.succeeded) {
            return Result.Fail<Tier>(dateNotEmpty.message);
        }

       return Result.Ok<Tier>(new Tier(props));
    }

    get value () : string {
        return this.props._value;
    }

    public change (newTier: string, currentTier: TierProps) : Result<Tier> {
        if (currentTier._value == newTier) {
            return Result.Fail<Tier>(`${newTier} cannot be the same with current tier`)
        }

        const nameNotNullOrUndefinded = Guard.AgainstNullOrUndefinded(newTier, 'tier');
        if (!nameNotNullOrUndefinded.succeeded) {
            return Result.Fail<Tier>(nameNotNullOrUndefinded.message);
        }

        const nameNotEmpty = Guard.AgainstEmpty(newTier, 'tier');
        if (!nameNotEmpty.succeeded) {
            return Result.Fail<Tier>(nameNotEmpty.message);
        }

        return Result.Ok<Tier>(new Tier({ _value: newTier }));
    }
    
}