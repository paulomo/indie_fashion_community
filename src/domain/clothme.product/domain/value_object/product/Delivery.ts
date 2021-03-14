import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface DeliveryProps {
    policy: string;
}

export class Delivery extends ValueObject<DeliveryProps> {

    private static MAX_POLICY_CHARACTERS = 350;
    
    private constructor(props: DeliveryProps) {
        super(props);
    }

    public static create (props: DeliveryProps) : Result<Delivery> {
        const policyNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.policy, 'delivery');
        if (!policyNullOrUndefinded.succeeded) {
            return Result.Fail<Delivery>(policyNullOrUndefinded.message);
        }

        const policyEmpty = Guard.AgainstEmpty(props.policy, 'delivery');
        if (!policyEmpty.succeeded) {
            return Result.Fail<Delivery>(policyEmpty.message);
        }

        const returnMaxCharacter = Guard.AgainstAtMost(this.MAX_POLICY_CHARACTERS, 'delivery');
        if (!returnMaxCharacter.succeeded) {
            return Result.Fail<Delivery>(returnMaxCharacter.message);
        }

        return Result.Ok<Delivery>(new Delivery(props));
    }

    public attachNew (toAdd: string, props: DeliveryProps) : Result<Delivery> {
        const policyNotEmpty = Guard.AgainstEmpty(toAdd, `${toAdd} cannot be empty`);
        if (!policyNotEmpty.succeeded) {
            return Result.Fail<Delivery>(policyNotEmpty.message)
        }

        const policyToAddCount = Guard.AgainstGreaterThan(Delivery.MAX_POLICY_CHARACTERS, toAdd.length);
        if (!policyToAddCount.succeeded) {
            return Result.Fail<Delivery>(policyToAddCount.message)
        }
        return Result.Ok<Delivery>(new Delivery(props))
    }

    get policy () {
        return this.props.policy;
    }
}