import Guid from '../../../../../clothme.shared.kernel/domain/entity/Guid';
import { ICompany } from './ICompany';
import { BrandId } from "../../value_object/brand/BrandId";
import { LocationId } from "../../value_object/location/LocationId";
import { Entity } from '../../../../../clothme.shared.kernel/domain/entity/Entity';
import { CompanyId } from '../../value_object/company/CompanyId';
import { CompanyName } from '../../value_object/company/CompanyName';
import { EstablishedDate } from '../../value_object/company/EstablishedDate';
import { CompanyTier } from "../../value_object/company/companyTier/Tier";
import { StreetAddress } from "../../value_object/company/StreetAddress";
import { Result } from '../../../../../clothme.shared.kernel/error/Result';
import { AggregateRoot } from '../../../../../clothme.shared.kernel/domain/entity/AggregateRoot';
import { Guard } from '../../../../../clothme.shared.kernel/error/Guard';


interface CompanyProps {
    companyName: CompanyName;
    streetAddress?: StreetAddress;
    establishedDate?: EstablishedDate;
    companyTier: CompanyTier;
}

export class Company extends AggregateRoot<CompanyProps> implements ICompany {

    private constructor(props: CompanyProps, id?: Guid) {
        super(props, id)
    }

    public static create (props: CompanyProps, id?: Guid) : Result<Company> {
        const guardResult = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.companyName, argumentName: 'companyName'},
            {argument: props.streetAddress, argumentName: 'streetAddress'},
            {argument: props.establishedDate, argumentName: 'establishDate'},
            {argument: props.companyTier, argumentName: 'companyTier'}
        ]);
        if (!guardResult.succeeded) {
            return Result.Fail<Company>(guardResult.message)
        }
        
        return Result.Ok<Company>(new Company(props));
    }

    get companyId () : CompanyId {
        return CompanyId.create(this._id).getValue()
    }

    get companyName () : CompanyName {
        return this.props.companyName;
    }

    get streetAddress () : StreetAddress {
        return this.props.streetAddress as StreetAddress;
    }

    get establishedDated () : EstablishedDate {
        return this.props.establishedDate as EstablishedDate;
    }

    get tier () : CompanyTier {
        return this.props.companyTier;
    }
}