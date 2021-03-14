import { IndividualId } from "../../value_object/IndividualId";
import { IndividualName } from "../../value_object/IndividualName";
import { IndividualAddress } from "../../value_object/IndividualAddress";
import { IndividualEmail } from "../../value_object/IndividualEmail";
import { IndividualPassword } from "../../value_object/IndividualPassword";
import { IndividualPhoneNumber } from "../../value_object/IndividualPhoneNumber";
import { StartDate } from "../../value_object/StartDate";
import { Tier } from "../../value_object/Tier";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import Guid from "../../../../clothme.shared.kernel/domain/entity/Guid";
import { AggregateRoot } from "../../../../clothme.shared.kernel/domain/entity/AggregateRoot";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface IndividualProps {
    individualName: IndividualName;
    email: IndividualEmail;
    password?: IndividualPassword;
    phoneNumber: IndividualPhoneNumber;
    address: IndividualAddress;
    startDate?: StartDate;
    tier: Tier;
}

export class Individual extends AggregateRoot<IndividualProps> {

    private constructor(props: IndividualProps, id?: Guid) {
        super(props);
    }

    public static create(props: IndividualProps, id?: Guid) : Result<Individual> {
        const guardResult = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.individualName, argumentName: 'individualName'},
            {argument: props.email, argumentName: 'email'},
            {argument: props.password, argumentName: 'password'},
            {argument: props.phoneNumber, argumentName: 'phoneNumber'},
            {argument: props.address, argumentName: 'address'},
            {argument: props.startDate, argumentName: 'startDate'},
            {argument: props.tier, argumentName: 'tier'},
        ]);
        if (!guardResult.succeeded) {
            return Result.Fail<Individual>(guardResult.message)
        }

        return Result.Ok<Individual>(new Individual(props))
    }

    get IndividualId () : IndividualId {
        return IndividualId.create(this._id).getValue();
    }

    get individualName () : IndividualName {
        return this.props.individualName
    }

    get email () : IndividualEmail {
        return this.props.email
    }

    get password () : IndividualPassword {
        return this.props.password as IndividualPassword
    }

    get phoneNumber () : IndividualPhoneNumber {
        return this.props.phoneNumber
    }

    get address () : IndividualAddress {
        return this.props.address
    }

    get startDate () : StartDate {
        return this.props.startDate as StartDate
    }

    get tier () : Tier {
        return this.props.tier
    }
}