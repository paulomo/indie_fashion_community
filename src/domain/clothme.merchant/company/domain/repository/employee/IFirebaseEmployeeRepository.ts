import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";
import { IRepository } from "../../../../../clothme.shared.kernel/domain/repository/IRepository";


export interface IFirebaseEmployeeRepository extends IRepository<any> {
    addEmployee(data: IDTO) : Promise<any>;
    editEmployee(data: IDTO) : Promise<any>;
    getEmployeeByEmployeeId(data: IDTO) : Promise<any>;
    getAllEmployeeByLocation(data: IDTO) : Promise<[]>;
    getEmployeeByEmployeeName(data: IDTO) : Promise<any>;
    terminateEmployee(data: IDTO) : Promise<void>;
    assignDuties(data: IDTO) : Promise<any>;
    removeDuties(data: any) : Promise<any>;
    assignRole(data: any) : Promise<any>;
    removeRole(data: any) : Promise<any>;
}