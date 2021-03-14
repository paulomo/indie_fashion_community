import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { UnPublishBrandDTO } from "./UnPublishBrandDTO";
import { UnPublishBrandResponse } from "./UnPublishBrandResponse";
import { IBrandRepository } from "../../../../domain/repository/brand/IBrandRespository";


export class GetBrandByBrandName implements IUseCase<UnPublishBrandDTO, UnPublishBrandResponse> {
    private brandRepo: IBrandRepository

    constructor(brandRepo: IBrandRepository) {
        this.brandRepo = brandRepo
    }

    public execute(request?: UnPublishBrandDTO) : Promise<UnPublishBrandResponse> {
        throw new Error("Method not implemented.");
    }
}