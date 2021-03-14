import Guid from "../../../../../clothme.shared.kernel/domain/entity/Guid";
import { AggregateRoot } from '../../../../../clothme.shared.kernel/domain/entity/AggregateRoot';
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
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { IEmployee } from './IEmployee';
import { CompanyId } from '../../value_object/company/CompanyId';
import { DateOfBirth } from '../../value_object/employee/DateOfBirth';
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";
import { LocationId } from "../../value_object/location/LocationId";
import { EmployeePosition } from "../../value_object/employee/EmployeePosition";


export interface EmployeeProps {
    companyId: CompanyId;
    locationId: LocationId;
    firstName: FirstName;
    lastName: LastName;
    email: EmployeeEmail;
    password?: EmployeePassword;
    phoneNumber?: PhoneNumber;
    position: EmployeePosition;
    dateOfBirth?: DateOfBirth;
    age?: Age;
    streetAddress?: StreetAddress;
    country?: CountryAddress;
    role?: Role;
    duties?: Duties;
}

export class Employee extends AggregateRoot<EmployeeProps> implements IEmployee {

    private constructor(props: EmployeeProps, id?: Guid) {
        super(props, id)
    }

    public static create (props: EmployeeProps, id?: Guid) : Result<Employee> {
        const guardResult = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.firstName, argumentName: 'firstName'},
            {argument: props.lastName, argumentName: 'lastName'},
            {argument: props.dateOfBirth, argumentName: 'dateOfBirth'},
            {argument: props.email, argumentName: 'email'},
            {argument: props.password, argumentName: 'password'},
            {argument: props.phoneNumber, argumentName: 'phoneNumber'},
            {argument: props.streetAddress, argumentName: 'streetAddress'},
            {argument: props.country, argumentName: 'country'},
            {argument: props.position, argumentName: 'employeePosition'},
            {argument: props.age, argumentName: 'age'},
            {argument: props.role, argumentName: 'role'},
            {argument: props.duties, argumentName: 'duties'},
            {argument: props.companyId, argumentName: 'companyId'},
            {argument: props.locationId, argumentName: 'locationId'}
        ]);
        if (!guardResult.succeeded) {
            return Result.Fail<Employee>(guardResult.message)
        }

        return Result.Ok<Employee>(new Employee(props))
    }

    get employeeId () : EmployeeId {
        return EmployeeId.create(this._id).getValue();
    }

    get companyId () : CompanyId {
        return this.props.companyId;
    }

    get locationId () : LocationId {
        return this.props.locationId
    }

    get firstName () : FirstName {
        return this.props.firstName;
    }

    get lastName () : LastName {
        return this.props.lastName;
    }

    get dateOfBirth () : DateOfBirth | undefined {
        return this.props.dateOfBirth;
    }

    get email () : EmployeeEmail {
        return this.props.email;
    }

    get password () : EmployeePassword | undefined {
        return this.props.password;
    }

    get phoneNumber () : PhoneNumber | undefined {
        return this.props.phoneNumber;
    }

    get position () : EmployeePosition {
        return this.props.position;
    }

    get age () : Age | undefined {
        return this.props.age;
    }

    get streetAddress () : StreetAddress | undefined {
        return this.props.streetAddress;
    }

    get country () : CountryAddress| undefined {
        return this.props.country;
    }

    get role () : Role| undefined {
        return this.props.role;
    }

    get duties () : Duties | undefined {
        return this.props.duties;
    }
    



}