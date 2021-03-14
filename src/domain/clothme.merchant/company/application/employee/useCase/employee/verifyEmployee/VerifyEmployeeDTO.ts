import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO"


export interface VerifyEmployeeDTO extends IDTO, ICompanyDTO {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  position: string;
  employeeId: string;
  companyId: string;
  locationId: string;
  identity: File;
  approvalLetter: File;
} 