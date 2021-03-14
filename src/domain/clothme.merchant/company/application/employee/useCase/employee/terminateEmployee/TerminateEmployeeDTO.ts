import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO"


export interface TerminateEmployeeDTO extends IDTO {
    adminId: string;
    locationIdForAdmin: string;
    companyIdForAdmin: string;
    adminRole: string[]; 
    adminDuties: string[];
    employeeId: string;
    locationIdForEmployee: string;
    companyIdForEmployee: string;
    terminationdate: string;
}