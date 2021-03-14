import { AxiosError, AxiosResponse } from "axios";
import { Api } from "../../../../../clothme.shared.kernel/infrastructure/http/Api";
import { IEmployeeRepository } from "../../../domain/repository/employee/IEmployeeRepository";
import { Employee } from "../../../domain/entity/employee/Employee";
import { AddEmployeeDTO } from "../../../application/employee/useCase/employee/addEmployee/AddEmployeeDTO";
import { AssignDutiesDTO } from "../../../application/employee/useCase/employee/assignDuties/AssignDutiesDTO";
import { AssignRoleDTO } from "../../../application/employee/useCase/employee/assignRoles/AssignRoleDTO";
import { RemoveDutiesDTO } from "../../../application/employee/useCase/employee/removeDuties/RemoveDutiesDTO";
import { RemoveRoleDTO } from "../../../application/employee/useCase/employee/removeRole/RemoveRoleDTO";
import { GetAllEmployeeDTO } from "../../../application/employee/useCase/employee/getAllEmployee/GetAllEmployeeDTO";
import { GetEmployeeByEmployeeIdDTO } from "../../../application/employee/useCase/employee/getEmployeeByEmployeeId/GetEmployeeByEmployeeIdDTO";
import { GetEmployeeByEmployeeNameDTO } from "../../../application/employee/useCase/employee/getEmployeeByEmployeeName/GetEmployeeByEmployeeNameDTO";
import { TerminateEmployeeDTO } from "../../../application/employee/useCase/employee/terminateEmployee/TerminateEmployeeDTO";
import { UserEndpoint } from "../endpoint/EmployeeEndpoint";
import { EmployeeMapper } from "../../../application/employee/mapper/EmployeeMapper";
import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";
import { EditEmployeeDTO } from "../../../application/employee/useCase/employee/editEmployee/EditEmployeeDTO";


class EmployeeRepositoryImpl extends Api implements IEmployeeRepository {

    public constructor() {
        super(); 
        this.assignDuties = this.assignDuties.bind(this);
        this.getAllEmployeeByLocation = this.getAllEmployeeByLocation.bind(this);
        this.assignRole = this.assignRole.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.getEmployeeByEmployeeId = this.getEmployeeByEmployeeId.bind(this);
        this.removeDuties = this.removeDuties.bind(this);
        this.terminateEmployee = this.terminateEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.getEmployeeByEmployeeName = this.getEmployeeByEmployeeName.bind(this);
        this.removeRole = this.removeRole.bind(this);
        this.remove = this.remove.bind(this);
    }

    public async assignDuties(data: IDTO): Promise<Employee> {
        throw new Error("Method not implemented.");
    }

    public async removeDuties(data: RemoveDutiesDTO): Promise<Employee> {
        const queryString = `?adminId=${data}&employeeId=${data}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: UserEndpoint.ADD_EMPLOYEE + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            const employee = EmployeeMapper.toDomain(result);
            return employee.getValue();
        } catch (error) {
            return error
        }
    }

    public async removeRole(data: RemoveRoleDTO): Promise<Employee> {
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: UserEndpoint.ADD_EMPLOYEE,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            const employee = EmployeeMapper.toDomain(result);
            return employee.getValue();
        } catch (error) {
            return error
        }
    }

    public async terminateEmployee(data: TerminateEmployeeDTO): Promise<void> {
        const queryString = `?adminId=${data.adminId}&employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: UserEndpoint.ADD_EMPLOYEE + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result;
        } catch (error) {
            return error
        }
    }

    public async addDuties(data: AssignDutiesDTO): Promise<Employee> {
        const queryString = `?adminId=${data.adminId}&employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: UserEndpoint.ADD_EMPLOYEE + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            const employee = EmployeeMapper.toDomain(result);
            return employee.getValue();
            return result;
        } catch (error) {
            return error
        }
    }

    public async assignRole(data: AssignRoleDTO): Promise<Employee> {
        const queryString = `?adminId=${data.adminId}&employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: UserEndpoint.ADD_EMPLOYEE + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            const employee = EmployeeMapper.toDomain(result);
            return employee.getValue();
        } catch (error) {
            return error
        }
    }

    /**
     * 
     * @param data 
     */
    public async addEmployee (data: AddEmployeeDTO): Promise<Employee> {
        const queryString = `?employeeId=${data.employeeId}`; 
        try {
                const response = await this.requestMethod({
                                    method: "POST",
                                    url: UserEndpoint.ADD_EMPLOYEE,
                                    data: JSON.stringify(data)
                                    })
                const result = response.data;
                const employee = EmployeeMapper.toDomain(result);
                return employee.getValue();
            } catch (error) {
                return error
            }
    }


    /**
     * 
     * @param data 
     */

    public async getEmployeeByEmployeeId(data: GetEmployeeByEmployeeIdDTO): Promise<Employee> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: UserEndpoint.ADD_EMPLOYEE + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result;
        } catch (error) {
            return error
        }
    }


    /**
     * 
     * @param data 
     */

    public async getAllEmployeeByLocation (data: GetAllEmployeeDTO): Promise<Employee[]> {
        const queryString = `?employeeId=${data.locationId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: UserEndpoint.ADD_EMPLOYEE + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result;
        } catch (error) {
            return error
        }
    }


    /**
     * 
     * @param employeeName 
     */

    public async getEmployeeByEmployeeName(data: GetEmployeeByEmployeeNameDTO): Promise<Employee> {
        const queryString = `?employeeId=${data.employeeName}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: UserEndpoint.ADD_EMPLOYEE + queryString,
                                data: JSON.stringify(data),
                                //headers:
                                })
            const result = response.data;
            return result;
        } catch (error) {
            return error
        }
    }


    /**
     * 
     */
    public async editEmployee(data: EditEmployeeDTO) : Promise<Employee> {
        const queryString = `?employeeId=${data}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: UserEndpoint.ADD_EMPLOYEE + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result;
        } catch (error) {
            return error
        }
    }
    
    remove(data: IDTO): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    // public async remove(data: RemoveEmployeeDTO): Promise<Employee> {
    //     const queryString = `?adminId=${data.adminId}&employeeId=${data.employeeId}`;
    //     try {
    //         const response = await this.requestMethod({
    //                             method: "POST",
    //                             url: UserEndpoint.ADD_EMPLOYEE + queryString,
    //                             data: JSON.stringify(data)
    //                             })
    //         const result = response.data;
    //         return result;
    //     } catch (error) {
    //         return error
    //     }
    // }

}

export default new EmployeeRepositoryImpl();