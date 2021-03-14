import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { EditLocationDTO } from "./EditLocationDTO";
import { EditLocationResponse } from "./EditLocationResponse";
import { ILocationRepository } from "../../.././../domain/repository/location/ILocationRepository";


export class EditLocation implements IUseCase<EditLocationDTO, EditLocationResponse> {
    private locationRepo: ILocationRepository

    constructor(locationRepo: ILocationRepository) {
        this.locationRepo = locationRepo
    }

    public execute(request?: EditLocationDTO) : Promise<EditLocationResponse> {
        throw new Error("Method not implemented.");

    }
}