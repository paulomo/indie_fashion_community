import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { AddLocationDTO } from "./AddLocationDTO";
import { AddLocationResponse } from "./AddLocationResponse";
import { ILocationRepository } from "../../.././../domain/repository/location/ILocationRepository";


export class AddLocation implements IUseCase<AddLocationDTO, AddLocationResponse> {
    private locationRepo: ILocationRepository

    constructor(locationRepo: ILocationRepository) {
        this.locationRepo = locationRepo
    }

    public execute(request?: AddLocationDTO) : Promise<AddLocationResponse> {
        throw new Error("Method not implemented.");

    }
}