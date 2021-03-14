import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IEmployeeRepository } from "../../../../../domain/repository/employee/IEmployeeRepository";
import { GetEmployeeByEmployeeIdDTO } from "./GetEmployeeByEmployeeIdDTO";
import { GetEmployeeByEmployeeIdResponse, GetEmployeeByEmployeeIdResponseDTO } from "./GetEmployeeByEmployeeIdResponse";
import { IFirebaseEmployeeRepository } from "../../../../../domain/repository/employee/IFirebaseEmployeeRepository";
import { EmployeeId } from "../../../../../domain/value_object/employee/EmployeeId";
import { CompanyId } from "../../../../../domain/value_object/company/CompanyId";
import Guid from "../../../../../../../clothme.shared.kernel/domain/entity/Guid";
import { LocationId } from "../../../../../domain/value_object/location/LocationId";
import { right, Result, left } from "../../../../../../../clothme.shared.kernel/error/Result";
import { EmployeeMapper } from "../../../mapper/EmployeeMapper";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";


export class GetEmployeeByEmployeeId implements IUseCase<GetEmployeeByEmployeeIdDTO, Promise<GetEmployeeByEmployeeIdResponse>> {
    private employeeRepo: IEmployeeRepository | IFirebaseEmployeeRepository;

    constructor(employeeRepo: IEmployeeRepository | IFirebaseEmployeeRepository) {
        this.employeeRepo = employeeRepo;
    }

    public async execute(request: GetEmployeeByEmployeeIdDTO) : Promise<GetEmployeeByEmployeeIdResponse> {
        const employeeIdOrError = EmployeeId.create(new Guid(request.employeeId));
        const companyIdOrError = CompanyId.create(new Guid(request.companyId));
        const locationIdOrError = LocationId.create(new Guid(request.locationId));

        try {
            const response = await this.employeeRepo.getEmployeeByEmployeeId(request);
            const returnedEmployee = EmployeeMapper.toDataModel(response)
            return right(Result.Ok<GetEmployeeByEmployeeIdResponseDTO>({ employee: returnedEmployee }))
        } catch(error) {
            return left(AppError.Create(error)); 
        }

    }
}