import Guid from "../../../../../clothme.shared.kernel/domain/entity/Guid";
import { Entity } from '../../../../../clothme.shared.kernel/domain/entity/Entity';
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";
import { LocationName } from "../../value_object/location/LocationName";
import { LocationAddress } from "../../value_object/location/LocationAddress";
import { LocationLogo } from "../../value_object/location/LocationLogo";
import { CompanyId } from "../../value_object/company/CompanyId";
import { LocationId } from "../../value_object/location/LocationId";
import { Result } from '../../../../../clothme.shared.kernel/error/Result';
import { ILocation } from './ILocation';


interface LocationProps {
    locationName: LocationName;
    locationLogo?: LocationLogo;
    locationAddress: LocationAddress;
    companyId: CompanyId;
}

export class Location extends Entity<LocationProps> implements ILocation {

    private constructor(props: LocationProps) {
        super(props)
    }

    public static create (props: LocationProps, id?: Guid) : Result<Location> {
        const guardResult = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.locationName, argumentName: 'locationName'},
            {argument: props.locationAddress, argumentName: 'locationAddress'},
            {argument: props.locationLogo, argumentName: 'locationLogo'},
            {argument: props.companyId, argumentName: 'companyId'}
        ]);
        if (!guardResult.succeeded) {
            return Result.Fail<Location>(guardResult.message)
        }
        
        return Result.Ok(new Location(props))
    }

    
    get locationId () : LocationId {    
        return LocationId.create(this._id).getValue();
    }

    get companyId () : CompanyId {
        return this.props.companyId
    }

    get name () : LocationName {
        return this.props.locationName;
    }

    get address () : LocationAddress {
        return this.props.locationAddress;
    }

    get logo () : LocationLogo {
        return this.props.locationLogo as LocationLogo;
    }
}