import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";


export interface AddEmployeeDTO extends IDTO, ICompanyDTO {
    adminEmployeeId: string;
    companyId: string;
    locationId: string;
    dateAdded: string;
    employeeId: string;
    employeeFirstName: string;
    employeeLastName: string;
    employeePosition: string;
    employeeEmail: string;
    employeePassword: string;
    employeeRole: string[];
    employeeDuties: EmployeeDutiesDTO;
}

export interface EmployeeDutiesDTO {
    product: string[];
    sale: string[];
    employee: string[];
    customer: string[];
    wallet: string[];
    analytic: string[];
    report: string[];
}