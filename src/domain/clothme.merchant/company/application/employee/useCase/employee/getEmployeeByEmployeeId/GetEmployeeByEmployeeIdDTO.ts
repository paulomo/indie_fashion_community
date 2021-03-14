import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO"


export interface GetEmployeeByEmployeeIdDTO extends IDTO, ICompanyDTO {
    employeeId: string;
}