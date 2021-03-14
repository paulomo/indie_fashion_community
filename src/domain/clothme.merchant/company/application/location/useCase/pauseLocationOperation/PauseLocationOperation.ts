import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IEmployeeRepository } from "../../../../domain/repository/employee/IEmployeeRepository";
import { ILocationRepository } from "../../../../domain/repository/location/ILocationRepository";
import { PauseLocationOperationDTO } from "./PauseLocationOperationDTO";
import { PauseLocationOperationResponse } from "./PauseLocationOperationResponse";


export class PauseLocationOperation implements IUseCase<PauseLocationOperationDTO, Promise<PauseLocationOperationResponse>> {
    private employeeRepo: IEmployeeRepository;
    private locationRepo: ILocationRepository

    constructor(employeeRepo: IEmployeeRepository, locationRepo: ILocationRepository) {
        this.employeeRepo = employeeRepo;
        this.locationRepo = locationRepo;
    }

    execute (request: PauseLocationOperationDTO) : Promise<PauseLocationOperationResponse> {
        throw new Error("Method not implemented.");
        
    }
}