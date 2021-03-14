import { IDTO } from "../../../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../../../clothme.shared.kernel/application/dto/ICompanyDTO"

export interface EditEmployeeDTO extends IDTO, ICompanyDTO {
    employeeId: string;
    employeeFirstName: string;
    dateOfBirth: string;
    age: number;
    email: string;
    password: string;
    streetAddress: string;
    country: string;
    phoneNumber: string;
    role: {};
    duties: {};
}