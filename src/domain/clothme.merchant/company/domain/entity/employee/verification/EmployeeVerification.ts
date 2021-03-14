import { EmployeeIdentity } from "../../../value_object/employee/verification/EmployeeIdentity";
import { AppointmentNotice } from "../../../value_object/employee/verification/AppointmentNotice";
import { CompanyId } from "../../../value_object/company/CompanyId";
import { LocationId } from "../../../value_object/location/LocationId";
import { EmployeeId } from "../../../value_object/employee/EmployeeId";
import { EmployeePosition } from "../../../value_object/employee/EmployeePosition";
import { Entity } from "../../../../../../clothme.shared.kernel/domain/entity/Entity";
import Guid from "../../../../../../clothme.shared.kernel/domain/entity/Guid";
import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../../clothme.shared.kernel/error/Guard";


export interface EmployeeVerificationProps {
    employeeId: EmployeeId;
    employeePosition: EmployeePosition;
    identity: EmployeeIdentity
    noticeOfAppointment: AppointmentNotice
    companyId: CompanyId;
    locationId: LocationId;
}

export class EmployeeVerification extends Entity<EmployeeVerificationProps> {
    private constructor(props: EmployeeVerificationProps, id?: Guid) {
        super(props, id)
    }

    public static create (props: EmployeeVerificationProps, id?: Guid) : Result<EmployeeVerification> {
        const guardResult = Guard.AgainstNullOrUndefindedBulk([
            {argument: props.companyId, argumentName: 'companyId'},
            {argument: props.employeeId, argumentName: 'employeeId'},
            {argument: props.employeePosition, argumentName: 'employeePosition'},
            {argument: props.identity, argumentName: 'identity'},
            {argument: props.locationId, argumentName: 'locationId'},
            {argument: props.noticeOfAppointment, argumentName: 'noticeOfAppointment'}
        ]);
        if (!guardResult.succeeded) {
            return Result.Fail<EmployeeVerification>(guardResult.message)
        }

        return Result.Ok<EmployeeVerification>(new EmployeeVerification(props));

    }

    get employeeId () : EmployeeId {
        return this.props.employeeId
    }

    get employeePosition() : EmployeePosition {
        return this.props.employeePosition;
    }
    
    get identity() : EmployeeIdentity {
        return this.props.identity;
    }

    get noticeOfAppointment() : AppointmentNotice {
        return this.props.noticeOfAppointment;
    }

    get companyId() : CompanyId {
        return this.props.companyId;
    }

    get locationId() : LocationId {
        return this.props.locationId;
    }

}