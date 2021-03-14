import { Mapper } from "../../../../../clothme.shared.kernel/infrastructure/mapper/Mapper";
import { Location } from "../../../domain/entity/location/Location";
import Guid from "../../../../../clothme.shared.kernel/domain/entity/Guid";
import { LocationName } from "../../../domain/value_object/location/LocationName";
import { LocationLogo } from "../../../domain/value_object/location/LocationLogo";
import { LocationAddress } from "../../../domain/value_object/location/LocationAddress";
import { CompanyId } from "../../../domain/value_object/company/CompanyId";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { LocationApplicationModel, LocationAddressApplicationModel } from "../model/LocationApplicationModel";

export class LocationMapper implements Mapper<Location> {

    public static toDomainModel(raw: any) : Result<Location> {
        const locationNameOrError = LocationName.create({value: raw.locationName})
        const locationLogoOrError = LocationLogo.create({image: raw.locationLogo})
        const locationAddressOrError = LocationAddress.create({city: raw.city, provinceOrState: raw.provinceOrState, country: raw.country})
        const companyIdOrError = CompanyId.create(new Guid(raw.companyId))
        const locationOrError = Location.create({
            locationName: locationNameOrError.getValue(),
            locationLogo: locationLogoOrError.getValue(),
            locationAddress: locationAddressOrError.getValue(),
            companyId: companyIdOrError.getValue()
         }, new Guid(raw.locationId));

         if (locationOrError.isFailure) return Result.Fail<Location>("")

         return Result.Ok<Location>(locationOrError.getValue())
    }


    public static toDataModel(data: Location) : LocationApplicationModel {
        const address = new LocationAddressApplicationModel(
            data.props.locationAddress.props.city,
            data.props.locationAddress.props.provinceOrState,
            data.props.locationAddress.props.country
        )
        return new LocationApplicationModel(
            data.props.locationName.value,
            address,
            data.companyId.id.toString(),
            data.props.locationLogo?.props.image
        )
    }

}