import { AggregateRoot } from '../../../../../clothme.shared.kernel/domain/entity/AggregateRoot';
import { Entity } from "../../../../../clothme.shared.kernel/domain/entity/Entity";
import { Age } from "../../value_object/employee/Age";
import { EmployeeEmail } from "../../value_object/employee/EmployeeEmail";
import { StreetAddress } from "../../value_object/employee/StreetAddress";
import { EmployeeId } from "../../value_object/employee/EmployeeId";
import { FirstName } from "../../value_object/employee/FirstName";
import { LastName } from "../../value_object/employee/LastName";
import { EmployeePassword } from "../../value_object/employee/EmployeePassword";
import { PhoneNumber } from "../../value_object/employee/PhoneNumber";
import { CountryAddress } from "../../value_object/employee/CountryAddress";
import { Role } from "../../value_object/employee/Role";
import { Duties } from "../../value_object/employee/Duties";
import Guid from "../../../../../clothme.shared.kernel/domain/entity/Guid";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { CompanyId } from '../../value_object/company/CompanyId';
import { BrandId } from "../../value_object/brand/BrandId";
import { LocationId } from "../../value_object/location/LocationId";


 export interface IEmployee {
    // companyId: CompanyId;
    // brandId: BrandId;
    // locationId: LocationId;
    // firstName: FirstName;
    // lastName: LastName;
    // dateOfBirth: Date;
    // age: Age;
    // email: EmployeeEmail;
    // password: EmployeePassword;
    // streetAddress: StreetAddress;
    // country: CountryAddress;
    // phoneNumber: PhoneNumber;
    // role: Role;
    // duties: Duties;
}