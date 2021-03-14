import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IEmployeeRepository } from "../../../../../domain/repository/employee/IEmployeeRepository";
import { GetAllEmployeeDTO } from "./GetAllEmployeeDTO";
import { GetAllEmployeeResponse } from "./GetAllEmployeeResponse";


export class GetAllEmployee implements IUseCase<GetAllEmployeeDTO, Promise<GetAllEmployeeResponse>> {
    private employeeRepo: IEmployeeRepository;

    constructor(employeeRepo: IEmployeeRepository) {
        this.employeeRepo = employeeRepo;
    }

    public async execute (request: GetAllEmployeeDTO) : Promise<GetAllEmployeeResponse> {
        throw new Error("Method not implemented.");
    }
}