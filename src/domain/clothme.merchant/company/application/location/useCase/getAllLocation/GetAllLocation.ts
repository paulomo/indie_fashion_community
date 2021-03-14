import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { GetAllLocationDTO } from "./GetAllLocationDTO";
import { GetAllLocationResponse } from "./GetAllLocationResponse";
import { ILocationRepository } from "../../.././../domain/repository/location/ILocationRepository";


export class GetAllLocation implements IUseCase<GetAllLocationDTO, GetAllLocationResponse> {
    private locationRepo: ILocationRepository

    constructor(locationRepo: ILocationRepository) {
        this.locationRepo = locationRepo
    }

    public execute(request?: GetAllLocationDTO) : Promise<GetAllLocationResponse> {
        throw new Error("Method not implemented.");

    }
}