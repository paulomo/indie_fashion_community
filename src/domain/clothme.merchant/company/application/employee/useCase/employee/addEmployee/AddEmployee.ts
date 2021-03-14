import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IEmployeeRepository } from "../../../../../domain/repository/employee/IEmployeeRepository";
import { AddEmployeeDTO } from "./AddEmployeeDTO";
import { AddEmployeeResponse, AddEmployeeResponseDTO } from "./AddEmployeeResponse";
import { left, Result, right } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { CompanyId } from "../../../../../domain/value_object/company/CompanyId";
import Guid from "../../../../../../../clothme.shared.kernel/domain/entity/Guid";
import { LocationId } from "../../../../../domain/value_object/location/LocationId";
import { EmployeeId } from "../../../../../domain/value_object/employee/EmployeeId";
import { FirstName } from "../../../../../domain/value_object/employee/FirstName";
import { LastName } from "../../../../../domain/value_object/employee/LastName";
import { EmployeePosition } from "../../../../../domain/value_object/employee/EmployeePosition";
import { Role } from "../../../../../domain/value_object/employee/Role";
import { Duties } from "../../../../../domain/value_object/employee/Duties";
import { EmployeeEmail } from "../../../../../domain/value_object/employee/EmployeeEmail";
import { DateAdded } from "../../../../../domain/value_object/DateAdded";
import { EmployeeMapper } from "../../../mapper/EmployeeMapper";
import { Employee } from "../../../../../domain/entity/employee/Employee";
import { IFirebaseEmployeeRepository } from "../../../../../domain/repository/employee/IFirebaseEmployeeRepository";


export class AddEmployee implements IUseCase<AddEmployeeDTO, Promise<AddEmployeeResponse>> {
    private employeeRepo: IEmployeeRepository | IFirebaseEmployeeRepository;

    constructor(employeeRepo: IEmployeeRepository | IFirebaseEmployeeRepository) {
        this.employeeRepo = employeeRepo;
    }

    public async execute (request: AddEmployeeDTO) : Promise<AddEmployeeResponse> {
        let employee: Employee;

        let {adminEmployeeId, companyId, locationId, dateAdded, employeeId, employeeFirstName, employeeLastName, 
            employeePosition, employeeEmail, employeePassword, employeeRole, employeeDuties} = request;

        try {

            let adminEmployeeIdOrError = CompanyId.create(new Guid(adminEmployeeId))
            let companyIdOrError = CompanyId.create(new Guid(companyId))
            let locationIdOrError = LocationId.create(new Guid(locationId))
            let dateAddedOrError = DateAdded.create({ date: dateAdded })
            let employeeIdOrError = EmployeeId.create(new Guid(employeeId))
            let employeeFirstNameOrError = FirstName.create({ value: employeeFirstName })
            let employeeLastNameOrError = LastName.create({ value: employeeLastName })
            let employeePositionOrError = EmployeePosition.create({ value: employeePosition })
            let employeeEmailOrError = EmployeeEmail.create({ value: employeeEmail })
            let employeeRoleOrError = Role.set({ values: employeeRole })
            let employeeDutiesOrError = Duties.create({
                product: employeeDuties.product,
                sale: employeeDuties.sale,
                employee: employeeDuties.employee,
                customer: employeeDuties.customer,
                wallet: employeeDuties.wallet,
                analytic: employeeDuties.analytic,
                report: employeeDuties.report
            })

            try {

                employee = await this.employeeRepo.addEmployee(request)
                const returnedEmployee = EmployeeMapper.toDataModel(employee)
                return right(Result.Ok<AddEmployeeResponseDTO>({ employee: returnedEmployee }));

            } catch(error) {

                return left(AppError.Create(error));
                
            }

        }catch(error) {
            return left(AppError.Create(error));
        }
    }
}