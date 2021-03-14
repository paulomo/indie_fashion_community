import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { ILocationRepository } from "../../../../domain/repository/location/ILocationRepository";
import { LaunchLocationDTO } from "./LaunchLocationDTO";
import { LaunchLocationResponse } from "./LaunchLocationResponse"
 

export class LaunchLocation implements IUseCase<LaunchLocationDTO, LaunchLocationResponse> {
    private locationRepo: ILocationRepository

    constructor(locationRepo: ILocationRepository) {
        this.locationRepo = locationRepo
    }

    public execute(request?: LaunchLocationDTO) : Promise<LaunchLocationResponse> {
        throw new Error("Method not implemented.");
    }
}