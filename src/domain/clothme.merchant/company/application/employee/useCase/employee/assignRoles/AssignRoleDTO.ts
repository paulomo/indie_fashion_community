import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";

export interface AssignRoleDTO extends IDTO, ICompanyDTO {
    adminId: string;
    companyIdForAdmin: string;
    locationIdForAdmin: string;
    adminRoles: string[];
    adminDuties: {
        product: string[], 
        sale: string[],
        employee: string[],
        customer: string[],
        wallet: string[],
        analytic: string[],
        report: string[]
    };
    employeeId: string;
    companyIdForEmployee: string;
    locationIdForEmployee: string;
    employeeRole: string[];
    employeeDuties:  {
        product: string[], 
        sale: string[],
        employee: string[],
        customer: string[],
        wallet: string[],
        analytic: string[],
        report: string[]
    };
}