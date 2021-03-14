import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IEmployeeRepository } from "../../../../domain/repository/employee/IEmployeeRepository";
import { ILocationRepository } from "../../../../domain/repository/location/ILocationRepository";
import { GetLocationByLocationNameDTO } from "./GetLocationByLocationNameDTO";
import { GetLocationByLocationNameResponse } from "./GetLocationByLocationNameResponse";


export class GetLocationByLocationName implements IUseCase<GetLocationByLocationNameDTO, Promise<GetLocationByLocationNameResponse>> {
    private employeeRepo: IEmployeeRepository;
    private locationRepo: ILocationRepository;

    constructor(employeeRepo: IEmployeeRepository, locationRepo: ILocationRepository) {
        this.employeeRepo = employeeRepo;
        this.locationRepo = locationRepo;
    }

    execute (request: GetLocationByLocationNameDTO) : Promise<GetLocationByLocationNameResponse> {
        throw new Error("Method not implemented.");
        
    }
}