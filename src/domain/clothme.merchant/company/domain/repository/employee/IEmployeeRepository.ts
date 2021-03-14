import { IRepository } from "../../../../../clothme.shared.kernel/domain/repository/IRepository";
import { Employee } from "../../entity/employee/Employee";
import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";


export interface IEmployeeRepository extends IRepository<Employee> {
    addEmployee(data: IDTO) : Promise<any>;
    editEmployee(data: IDTO) : Promise<any>;
    getEmployeeByEmployeeId(data: IDTO) : Promise<Employee>;
    getAllEmployeeByLocation(data: IDTO) : Promise<Employee[]>;
    getEmployeeByEmployeeName(data: IDTO) : Promise<Employee>;
    terminateEmployee(data: IDTO) : Promise<void>;
    assignDuties(data: IDTO) : Promise<Employee>;
    removeDuties(data: any) : Promise<Employee>;
    assignRole(data: any) : Promise<Employee>;
    removeRole(data: any) : Promise<Employee>;
}