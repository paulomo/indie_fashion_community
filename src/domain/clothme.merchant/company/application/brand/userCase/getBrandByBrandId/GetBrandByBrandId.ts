import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { GetBrandByBrandIdDTO } from "./GetBrandByBrandIdDTO";
import { GetBrandByBrandIdResponse } from "./GetBrandByBrandIdResponse";
import { IBrandRepository } from "../../../../domain/repository/brand/IBrandRespository";


export class GetBrandByBrandId implements IUseCase<GetBrandByBrandIdDTO, GetBrandByBrandIdResponse> {
    private brandRepo: IBrandRepository

    constructor(brandRepo: IBrandRepository) {
        this.brandRepo = brandRepo
    }

    public execute(request?: GetBrandByBrandIdDTO) : Promise<GetBrandByBrandIdResponse> {
        throw new Error("Method not implemented.");
    }
}