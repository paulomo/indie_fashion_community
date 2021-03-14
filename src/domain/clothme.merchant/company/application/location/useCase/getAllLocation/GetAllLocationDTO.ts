import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";


export interface GetAllLocationDTO extends IDTO {
    employeeId: string;
    companyId: string;
}