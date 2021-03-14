import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { PublishBrandDTO } from "./PublishBrandDTO";
import { PublishBrandResponse } from "./PublishBrandResponse";
import { IBrandRepository } from "../../../../domain/repository/brand/IBrandRespository";


export class PublishBrand implements IUseCase<PublishBrandDTO, PublishBrandResponse> {
    private brandRepo: IBrandRepository

    constructor(brandRepo: IBrandRepository) {
        this.brandRepo = brandRepo
    }

    public execute(request?: PublishBrandDTO) : Promise<PublishBrandResponse> {
        throw new Error("Method not implemented.");
    }
}