import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { GetLocationByLocationIdDTO } from "./GetLocationByLocationIdDTO";
import { GetLocationByLocationIdResponse } from "./GetLocationByLocationIdResponse";
import { ILocationRepository } from "../../../../domain/repository/location/ILocationRepository";

export class GetLocationByLocationId implements IUseCase<GetLocationByLocationIdDTO, GetLocationByLocationIdResponse> {
    private locationRepo: ILocationRepository

    constructor(locationRepo: ILocationRepository) {
        this.locationRepo = locationRepo
    }

    public execute(request?: GetLocationByLocationIdDTO) : Promise<GetLocationByLocationIdResponse> {
        throw new Error("Method not implemented.");
        
    }
}