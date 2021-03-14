import { Brand } from "../../../domain/entity/brand/Brand";
import { Mapper } from "../../../../../clothme.shared.kernel/infrastructure/mapper/Mapper"
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { BrandApplicationModel } from "../model/BrandApplicationModel";
import { BrandName } from "../../../domain/value_object/brand/BrandName";
import { Logo } from "../../../domain/value_object/company/Logo";
import { BrandGender } from "../../../domain/value_object/brand/BrandGender";
import { BrandDemography } from "../../../domain/value_object/brand/BrandDemography";
import { BrandLaunchDate } from "../../../domain/value_object/brand/BrandLaunchDate";
import { LocationId } from "../../../domain/value_object/location/LocationId";
import { CompanyId } from "../../../domain/value_object/company/CompanyId";
import Guid from "../../../../../clothme.shared.kernel/domain/entity/Guid";

export class BrandMapper implements Mapper<Brand> {

    public static toDomainModel(raw: any) : Result<Brand> {
        const brandNameOrError = BrandName.create({title: raw.brandName})
        const brandLogoOError = Logo.set({image: raw.brandLogo})
        const brandGenderOrError = BrandGender.create({type: raw.brandGender})
        const brandDemographyOrError = BrandDemography.create({type: raw.brandDemography})
        const brandLaunchDateOrError = BrandLaunchDate.create({date: raw.brandLaunchDate})
        const locationIdOrError = LocationId.create(new Guid(raw.brandId))
        const companyIdOrError = CompanyId.create(new Guid(raw.companyId))

        const brandOrError = Brand.create({
            brandName: brandNameOrError.getValue(),
            brandLogo: brandLogoOError.getValue(),
            brandGender: brandGenderOrError.getValue(),
            brandDemography: brandDemographyOrError.getValue(),
            brandLaunchDate: brandLaunchDateOrError.getValue(),
            locationId: locationIdOrError.getValue(),
            companyId: companyIdOrError.getValue()
        }, new Guid(raw.brandId))

        if (brandOrError.isFailure) return Result.Fail<Brand>("")

        return Result.Ok<Brand>(brandOrError.getValue())
    }

    public static toDataModel(data: Brand) : BrandApplicationModel {
        return new BrandApplicationModel(
            data.props.brandName.props.title,
            data.props.brandGender.props.type,
            data.props.companyId.id.toString(),
            data.props.brandLogo?.props.image,
            data.props.brandLaunchDate?.props.date,
            data.props.locationId?.id.toString()
        )
    }
}