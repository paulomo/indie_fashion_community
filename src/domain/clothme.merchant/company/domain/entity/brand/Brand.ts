import { Entity } from '../../../../../clothme.shared.kernel/domain/entity/Entity';
import { Result } from '../../../../../clothme.shared.kernel/error/Result';
import { BrandId } from '../../value_object/brand/BrandId';
import { BrandName } from '../../value_object/brand/BrandName';
import { BrandGender } from '../../value_object/brand/BrandGender';
import { BrandDemography } from '../../value_object/brand/BrandDemography';
import { BrandLaunchDate } from '../../value_object/brand/BrandLaunchDate';
import Guid from '../../../../../clothme.shared.kernel/domain/entity/Guid';
import { Guard } from '../../../../../clothme.shared.kernel/error/Guard';
import { LocationId } from '../../value_object/location/LocationId';
import { CompanyId } from '../../value_object/company/CompanyId';
import { Logo } from '../../value_object/company/Logo';


interface BrandProps {
    brandName: BrandName,
    brandLogo?: Logo,
    brandGender: BrandGender,
    brandDemography?: BrandDemography,
    brandLaunchDate?: BrandLaunchDate;
    locationId?: LocationId;
    companyId: CompanyId
}

export class Brand extends Entity<BrandProps> {

    private constructor(props: BrandProps, id?: Guid) {
        super(props);
    }

    public static create (props: BrandProps, id?: Guid) : Result<Brand> {
        const guardResult = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.brandName, argumentName: 'brandName'},
            {argument: props.brandGender, argumentName: 'brandGender'},
            {argument: props.brandDemography, argumentName: 'brandDemography'},
            {argument: props.brandLaunchDate, argumentName: 'brandLaunchDate'},
            {argument: props.brandLogo, argumentName: 'brandLogo'},
            {argument: props.companyId, argumentName: 'companyId'},
            {argument: props.locationId, argumentName: 'locationId'}
        ]);
        if (!guardResult.succeeded) {
            return Result.Fail<Brand>(guardResult.message)
        }
        
        return Result.Ok<Brand>(new Brand(props, id))
    }

    get brandId () : BrandId {
        return BrandId.create(this._id).getValue()
    }

    get locationId () : LocationId {
        return this.props.locationId as LocationId
    }

    get compantId () : CompanyId {
        return this.props.companyId
    }

    get brandName () : BrandName {
        return this.brandName
    }

    get brandGender () : BrandGender {
        return this.brandGender
    }

    get brandLogo () : Logo {
        return this.brandLogo
    }

    get brandDemography () : BrandDemography {
        return this.brandDemography
    }

    get brandLaunchDate () : BrandLaunchDate {
        return this.brandLaunchDate
    }

}