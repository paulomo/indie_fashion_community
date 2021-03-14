import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { GetBrandByLocationIdDTO } from "./GetBrandByLocationIdDTO";
import { GetBrandByLocationIdResponse } from "./GetBrandByLocationIdResponse";
import { IBrandRepository } from "../../../../domain/repository/brand/IBrandRespository";


export class GetBrandByLocationId implements IUseCase<GetBrandByLocationIdDTO, GetBrandByLocationIdResponse> {
    private brandRepo: IBrandRepository

    constructor(brandRepo: IBrandRepository) {
        this.brandRepo = brandRepo
    }

    public async execute(request?: GetBrandByLocationIdDTO) : Promise<GetBrandByLocationIdResponse> {
        throw new Error("Method not implemented.");
    }
}