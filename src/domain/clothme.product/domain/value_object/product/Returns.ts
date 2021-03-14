import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface ReturnsProps {
    policy: string;
}

export class Returns extends ValueObject<ReturnsProps> {

    private static MAX_POLICY_CHARACTERS = 340;

    private constructor(props: ReturnsProps) {
        super(props)
    }

    public static create (props: ReturnsProps) : Result<Returns> {
        const returnsNotNullorUndefined = Guard.AgainstNullOrUndefinded(props.policy, 'returns');
        if (!returnsNotNullorUndefined.succeeded) {
            return Result.Fail<Returns>(returnsNotNullorUndefined.message);
        }

        const returnNotEmpty = Guard.AgainstEmpty(props.policy, 'returns');
        if (!returnNotEmpty.succeeded) {
            return Result.Fail<Returns>(returnNotEmpty.message);
        }

        const returnMaxCharacter = Guard.AgainstAtMost(this.MAX_POLICY_CHARACTERS, 'returns');
        if (!returnMaxCharacter.succeeded) {
            return Result.Fail<Returns>(returnMaxCharacter.message);
        }

        return Result.Ok<Returns>(new Returns(props));
    }

    public attachNew (toAdd: string, props: ReturnsProps) : Result<Returns> {
        const policyNotEmpty = Guard.AgainstEmpty(toAdd, `${toAdd} cannot be empty`);
        if (!policyNotEmpty.succeeded) {
            return Result.Fail<Returns>(policyNotEmpty.message)
        }

        const policyToAddCount = Guard.AgainstGreaterThan(Returns.MAX_POLICY_CHARACTERS, toAdd.length);
        if (!policyToAddCount.succeeded) {
            return Result.Fail<Returns>(policyToAddCount.message)
        }
        return Result.Ok<Returns>(new Returns(props))
    }

    get policy () {
        return this.props.policy;
    }
}