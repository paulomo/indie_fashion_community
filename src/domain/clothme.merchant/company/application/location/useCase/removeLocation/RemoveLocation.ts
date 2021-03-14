import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { ILocationRepository } from "../../../../domain/repository/location/ILocationRepository";
import { RemoveLocationDTO } from "./RemoveLocationDTO";
import { RemoveLocationResponse } from "./RemoveLocationResponse"
 

export class RemoveLocation implements IUseCase<RemoveLocationDTO, RemoveLocationResponse> {
    private locationRepo: ILocationRepository

    constructor(locationRepo: ILocationRepository) {
        this.locationRepo = locationRepo
    }

    public execute(request?: RemoveLocationDTO) : Promise<RemoveLocationResponse> {
        throw new Error("Method not implemented.");
    }
}