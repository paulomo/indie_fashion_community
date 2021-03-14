import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IEmployeeRepository } from "../../../../../domain/repository/employee/IEmployeeRepository";
import { TerminateEmployeeDTO } from "./TerminateEmployeeDTO";
import { TerminateEmployeeResponse } from "./TerminateEmployeeResponse";
import { left, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";


export class TerminateEmployee implements IUseCase<TerminateEmployeeDTO, Promise<TerminateEmployeeResponse>> {
    private employeeRepo: IEmployeeRepository;

    constructor(employeeRepo: IEmployeeRepository) {
        this.employeeRepo = employeeRepo;
    }

    public async execute (request: TerminateEmployeeDTO) : Promise<TerminateEmployeeResponse> {
        throw new Error("Method not implemented.");
        // let {adminId, locationIdForAdmin, companyIdForAdmin, adminRole, adminDuties,
        //     employeeId, locationIdForEmployee, companyIdForEmployee, terminationdate} = request;

        // try {

        // }catch(error) {
        //     return left(new AppError.UnexpectedError(error));
        // }
    }
}