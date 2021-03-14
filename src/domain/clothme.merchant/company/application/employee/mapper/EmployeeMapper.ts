import { Mapper } from "../../../../../clothme.shared.kernel/infrastructure/mapper/Mapper";
import { Employee } from "../../../domain/entity/employee/Employee";
import { EmailSignUpDTO } from "../../../application/employee/useCase/auth/emailSignUp/EmailSignUpDTO";
import { EmailSignInDTO } from "../../../application/employee/useCase/auth/emailSignIn/EmailSignInDTO";
import { ForgotPasswordDTO } from "../../../application/employee/useCase/auth/forgotPassword/ForgotPasswordDTO";
import { ResetPasswordDTO } from "../../../application/employee/useCase/auth/resetPassword/ResetPasswordDTO";
import { TerminateEmployeeDTO } from "../useCase/employee/terminateEmployee/TerminateEmployeeDTO";
import { AddEmployeeDTO } from "../useCase/employee/addEmployee/AddEmployeeDTO";
import { VerifyEmployeeDTO } from "../useCase/employee/verifyEmployee/VerifyEmployeeDTO";
import { FirstName } from "../../../domain/value_object/employee/FirstName";
import { CompanyId } from "../../../domain/value_object/company/CompanyId";
import Guid from "../../../../../clothme.shared.kernel/domain/entity/Guid";
import { LastName } from "../../../domain/value_object/employee/LastName";
import { EmployeeEmail } from "../../../domain/value_object/employee/EmployeeEmail";
import { LocationId } from "../../../domain/value_object/location/LocationId";
import { EmployeePosition } from "../../../domain/value_object/employee/EmployeePosition";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { EmployeeApplicationModel, EmployeeDutiesModel, EmployeeRolesModel } from "../model/EmployeeApplicationModel";
import { PhoneNumber } from "../../../domain/value_object/employee/PhoneNumber";
import { DateOfBirth } from "../../../domain/value_object/employee/DateOfBirth";
import { StreetAddress } from "../../../domain/value_object/employee/StreetAddress";
import { CountryAddress } from "../../../domain/value_object/employee/CountryAddress";
import { Role } from "../../../domain/value_object/employee/Role";
import { Duties } from "../../../domain/value_object/employee/Duties";


export class EmployeeMapper implements Mapper<Employee> {

    static toDomain(raw: any) : Result<Employee> {
        const companyIdOrError = CompanyId.create(new Guid(raw.companyId));
        const firstNameOrError = FirstName.create({value: raw.firstName});
        const lastNameOrError = LastName.create({value: raw.lastName});
        const emailOrError = EmployeeEmail.create({value: raw.email});
        const phoneNumberOrError = PhoneNumber.create({_value: raw.phoneNumber});
        const positionOrError = EmployeePosition.create({value: raw.position});
        const dateOfBirthOrError = DateOfBirth.create({value: raw.dateOfBirth});
        const streetAddressOrError = StreetAddress.create({streetNumber: raw.streetNumber, streetName: raw.streetName, city: raw.city, })
        const countryOrError = CountryAddress.create({stateOrProvince: raw.stateOrProvince, zipOrPostalCode: raw.zipOrPostalCode, country: raw.country})
        const locationIdOrError =  LocationId.create(new Guid(raw.locationId));
        const roleOrError = Role.set({values: raw.employeeRoles})
        const dutiesOrError = Duties.create({
            product: raw.productDuties, 
            employee: raw.employeeDuties,
            sale: raw.saleDuties,
            customer: raw.customerDuties,
            wallet: raw.walletDuties,
            analytic: raw.analyticDuties,
            report: raw.reportDuties
        })

        const employeeOrError = Employee.create({
            companyId: companyIdOrError.getValue(),
            locationId: locationIdOrError.getValue(),
            firstName: firstNameOrError.getValue(),
            lastName: lastNameOrError.getValue(),
            email: emailOrError.getValue(),
            phoneNumber: phoneNumberOrError.getValue(),
            position: positionOrError.getValue(),
            dateOfBirth: dateOfBirthOrError.getValue(),
            streetAddress: streetAddressOrError.getValue(),
            country: countryOrError.getValue(),
            role: roleOrError.getValue(),
            duties: dutiesOrError.getValue()
        }, new Guid(raw.employeeId));

        if (employeeOrError.isFailure) return Result.Fail<Employee>("");

        return Result.Ok<Employee>(employeeOrError.getValue()); 
    }

    static toDataModel(data: Employee) : EmployeeApplicationModel {
        let employeeDuties = new EmployeeDutiesModel(
            data.employeeId.id.toString(),
            data.duties?.productDuties,
            data.duties?.saleDuties,
            data.duties?.walletDuties,
            data.duties?.employeeDuties,
            data.duties?.customerDuties,
            data.duties?.analyticDuties,
            data.duties?.reportDuties,
            data.locationId.id.toString(),
            data.companyId.id.toString()
        );

        let employeeRoles = new EmployeeRolesModel(
            data.employeeId.id.toString(),
            data.role?.props.values as [],
            data.locationId.id.toString(),
            data.companyId.id.toString()
        );

        return new EmployeeApplicationModel(
            data.id.toString(), 
            data.firstName.props.value,  
            data.lastName.props.value, 
            data.email.props.value,
            data.phoneNumber?.props._value as string,
            data.dateOfBirth?.props.value,
            data.locationId.id.toString(),
            data.companyId.id.toString(),
            employeeDuties,
            employeeRoles
        )
    }  

    static toSignUp(data: EmailSignUpDTO) {
        throw new Error("Method not implemented.");
    }

    public static toTerminate (raw: any) : TerminateEmployeeDTO {
        return {
            adminId: raw.adminId,
            companyIdForAdmin: raw.companyIdForAdmin,
            locationIdForAdmin: raw.locationIdForAdmin,
            adminRole: raw.adminRole,
            adminDuties: raw.adminDuties,
            companyIdForEmployee: raw.companyIdForEmployee,
            locationIdForEmployee: raw.locationIdForEmployee,
            employeeId: raw.employeeId,
            terminationdate: raw.terminationdate,
            activityDate: raw.terminationdate
        }
    }

}