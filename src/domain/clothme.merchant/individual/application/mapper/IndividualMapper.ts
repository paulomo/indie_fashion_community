import { Mapper } from "../../../../clothme.shared.kernel/infrastructure/mapper/Mapper";
import { Individual } from "../../domain/entity/Individual";
import { IndividualApplicationModel, IndividualAddressApplicationModel } from "../model/IndividualApplicationModel";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { IndividualName } from "../../value_object/IndividualName";
import { IndividualEmail } from "../../value_object/IndividualEmail";
import { IndividualPhoneNumber } from "../../value_object/IndividualPhoneNumber";
import { StartDate } from "../../value_object/StartDate";
import { IndividualAddress } from "../../value_object/IndividualAddress";
import { Tier } from "../../value_object/Tier";
import Guid from "../../../../clothme.shared.kernel/domain/entity/Guid";

export class IndividualMapper implements Mapper<Individual> {

    public static toDataModel(domainModel: Individual) : IndividualApplicationModel {
        const address = new IndividualAddressApplicationModel(
            domainModel.address.city,
            domainModel.address.stateOrProvince,
            domainModel.address.country
        )
        return new IndividualApplicationModel(
            domainModel.individualName.value,
            domainModel.email.value,
            domainModel.phoneNumber.value,
            address,
            domainModel.startDate.value,
            domainModel.tier.value
        )
    }

    public static toDomainModel(raw: any) : Result<Individual> {
        const individualNameOrError = IndividualName.create({ _value: raw.individualName })
        const emailOrError = IndividualEmail.create({_value: raw.individualName  })
        const phoneNumberOrError = IndividualPhoneNumber.create({ _value: raw.IndividualPhoneNumber })
        const addressOrError = IndividualAddress.create({
            city: raw.city, stateOrProvince: raw.stateOrProvince, country: raw.country 
        })
        const startDateOError = StartDate.create({ date: raw.startDate })
        const tierOrError = Tier.create({ _value: raw.individualTier })

        const individualOrError = Individual.create({
            individualName: individualNameOrError.getValue(),
            email: emailOrError.getValue(),
            phoneNumber: phoneNumberOrError.getValue(),
            address: addressOrError.getValue(),
            startDate: startDateOError.getValue(),
            tier: tierOrError.getValue()
        }, new Guid(raw.individualId))

        if (individualOrError.isFailure) return Result.Fail<Individual>("")

        return Result.Ok<Individual>(individualOrError.getValue())
    }
}