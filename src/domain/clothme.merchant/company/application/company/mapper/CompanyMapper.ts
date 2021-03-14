import { Mapper } from "../../../../../clothme.shared.kernel/infrastructure/mapper/Mapper"
import { Company } from "../../../domain/entity/company/Company";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { CompanyName } from "../../../domain/value_object/company/CompanyName";
import { StreetAddress } from "../../../domain/value_object/company/StreetAddress";
import { EstablishedDate } from "../../../domain/value_object/company/EstablishedDate";
import { CompanyTier } from "../../../domain/value_object/company/companyTier/Tier";
import { CompanyApplicationModel, StreetAddressApplicationModel } from "../model/CompanyApplicationModel";
   
export class CompanyMapper implements Mapper<Company> {

    public static toDomainModel(raw: any) : Result<Company> {
        const companyNameOrError = CompanyName.create({value: raw.companyName})
        const streetAddressOrError = StreetAddress.create({city: raw.city, country: raw.country})
        const establishedDateOrError = EstablishedDate.create({date: raw.date})
        const companyTierOrError = CompanyTier.create({value: raw.companyTier})
        
        const companyOrError = Company.create({
            companyName: companyNameOrError.getValue(),
            streetAddress: streetAddressOrError.getValue(),
            establishedDate: establishedDateOrError.getValue(),
            companyTier: companyTierOrError.getValue()

        })

        if (companyOrError.isFailure) return Result.Fail<Company>("")

        return Result.Ok<Company>(companyOrError.getValue())
    } 

    public static toDataModel(data: Company) : CompanyApplicationModel {
        const streetAddress = new StreetAddressApplicationModel(
            Number(data.props.streetAddress?.city),
            data.props.streetAddress?.country as string
        )
        return new CompanyApplicationModel(
            data.props.companyName.props.value,
            data.props.companyTier.props.value,
            data.props.establishedDate?.props.date,
            streetAddress
        )
    }

}