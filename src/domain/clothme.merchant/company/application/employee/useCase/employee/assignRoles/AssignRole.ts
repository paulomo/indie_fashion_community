import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IEmployeeRepository } from "../../../../../domain/repository/employee/IEmployeeRepository";
import { AssignRoleDTO } from "./AssignRoleDTO";
import { EmployeeRolesDTO, AssignRoleResponse } from "./AssignRoleResponse";
import { left, right, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { Employee } from "../../../../../domain/entity/employee/Employee";
import { EmployeeRolesModel } from "../../../model/EmployeeApplicationModel";
import { EmployeeId } from "../../../../../domain/value_object/employee/EmployeeId";
import Guid from "../../../../../../../clothme.shared.kernel/domain/entity/Guid";
import { CompanyId } from "../../../../../domain/value_object/company/CompanyId";
import { LocationId } from "../../../../../domain/value_object/location/LocationId";
import { Role } from "../../../../../domain/value_object/employee/Role";
import { Duties } from "../../../../../domain/value_object/employee/Duties";


export class AssignRole implements IUseCase<AssignRoleDTO, Promise<AssignRoleResponse>> {
    private employeeRepo: IEmployeeRepository;

    constructor(employeeRepo: IEmployeeRepository) {
        this.employeeRepo = employeeRepo;
    }

    public async execute (request: AssignRoleDTO) : Promise<AssignRoleResponse> {
        throw new Error("Method not implemented.");
        let employee: Employee;

        let { adminId, companyIdForAdmin, locationIdForAdmin, adminRoles,
            adminDuties, employeeId, companyIdForEmployee, locationIdForEmployee,
            employeeRole, employeeDuties } = request;

            let adminIdOrError = EmployeeId.create(new Guid(adminId));
            let companyIdForAdminOrError = CompanyId.create(new Guid(companyIdForAdmin));
            let locationIdForAdminOrError = LocationId.create(new Guid(locationIdForAdmin));
            let adminRolesOrError = Role.set({values: adminRoles});
            let adminDutiesOrError = Duties.create({
                product: adminDuties.product,
                sale: adminDuties.sale,
                employee: adminDuties.employee,
                customer: adminDuties.customer,
                wallet: adminDuties.wallet,
                analytic: adminDuties.analytic,
                report: adminDuties.report
            });
        
            let employeeIdOrError = EmployeeId.create(new Guid(employeeId));
            let companyIdForEmployeeOrError = CompanyId.create(new Guid(companyIdForEmployee)); 
            let locationIdForEmployeeOrError = LocationId.create(new Guid(locationIdForEmployee)); 
            let employeeRoleOrError = Role.set({values: employeeRole}); 
            let employeeDutiesOrError = Duties.create({
                product: employeeDuties.product,
                sale: employeeDuties.sale,
                employee: employeeDuties.employee,
                customer: employeeDuties.customer,
                wallet: employeeDuties.wallet,
                analytic: employeeDuties.analytic,
                report: employeeDuties.report
            });

        try {
            employee = await this.employeeRepo.assignRole(request);
            // const returnedRoles = new EmployeeRolesModel(
            //     employee.id.toString(),
            //     employee.props.role.props.values,
            // );
            // return right(Result.Ok<EmployeeRolesDTO>({rolesData: returnedRoles}))
        }catch(error) {
            return left(AppError.Create(error));
        }
    }
}