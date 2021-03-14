import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IEmployeeRepository } from "../../../../../domain/repository/employee/IEmployeeRepository";
import { GetEmployeeByEmployeeNameDTO } from "./GetEmployeeByEmployeeNameDTO";
import { GetEmployeeByEmployeeNameResponse } from "./GetEmployeeByEmployeeNameResponse";
import { left, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";


export class GetEmployeeByEmployeeName implements IUseCase<GetEmployeeByEmployeeNameDTO, Promise<GetEmployeeByEmployeeNameResponse>> {
    private employeeRepo: IEmployeeRepository;

    constructor(employeeRepo: IEmployeeRepository) {
        this.employeeRepo = employeeRepo;
    }

    public async execute (request: GetEmployeeByEmployeeNameDTO) : Promise<GetEmployeeByEmployeeNameResponse> {
        throw new Error("Method not implemented.");
        // let {employeeName, companyId, locationId} = request;

        // try {

        // }catch(error) {
        //     return left(new AppError.UnexpectedError(error));
        // }
    }
}