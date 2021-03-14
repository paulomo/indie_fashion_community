import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { EditEmployeeDTO } from "./EditEmployeeDTO";
import { EditEmployeeResponse } from "./EditEmployeeResponse";
import { IEmployeeRepository } from "../../../../../domain/repository/employee/IEmployeeRepository";


export class EditEmployee implements IUseCase<EditEmployeeDTO, Promise<EditEmployeeResponse>> {
    private employeeRepo: IEmployeeRepository;

    constructor(employeeRepo: IEmployeeRepository) {
        this.employeeRepo = employeeRepo;
    }

    public async execute (request: EditEmployeeDTO) : Promise<EditEmployeeResponse> {
        throw new Error("Method not implemented.");
    }
}