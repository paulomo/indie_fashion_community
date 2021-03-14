import { IUseCase } from "../../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IEmployeeRepository } from "../../../../../domain/repository/employee/IEmployeeRepository";
import { VerifyEmployeeDTO } from "./VerifyEmployeeDTO";
import { VerifyEmployeeResponse } from "./VerifyEmployeeResponse";
import { left, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";


export class VerifyEmployee implements IUseCase<VerifyEmployeeDTO, Promise<VerifyEmployeeResponse>> {
    private employeeRepo: IEmployeeRepository;

    constructor(employeeRepo: IEmployeeRepository) {
        this.employeeRepo = employeeRepo;
    }

    public async execute (request: VerifyEmployeeDTO) : Promise<VerifyEmployeeResponse> {
        throw new Error("Method not implemented.");
        // let {email, employeeId, companyId, locationId, position, identity, approvalLetter} = request;
        // const employeeIdOrError = EmployeeId.create(new Guid(request.employeeId));
        // const employeeFirstNameOrError = FirstName.create({ value: request.firstName });
        // const employeeLastNameOrError = LastName.create({ value: request.lastName });
        // const employeePositionOrError = EmployeePosition.create({ value: request.position });
        // const employeePhoneNumberOrError = PhoneNumber.create({ _value: request.phoneNumber });
        // try {

        // }catch(error) {
        //     return left(new AppError.UnexpectedError(error));
        // }
    }
}