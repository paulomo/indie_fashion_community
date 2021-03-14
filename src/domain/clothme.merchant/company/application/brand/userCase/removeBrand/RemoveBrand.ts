import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { RemoveBrandDTO } from "./RemoveBrandDTO";
import { RemoveBrandResponse } from "./RemoveBrandResponse";
import { IBrandRepository } from "../../../../domain/repository/brand/IBrandRespository";


export class RemoveBrand implements IUseCase<RemoveBrandDTO, RemoveBrandResponse> {
    private brandRepo: IBrandRepository

    constructor(brandRepo: IBrandRepository) {
        this.brandRepo = brandRepo
    }

    public execute(request?: RemoveBrandDTO) : Promise<RemoveBrandResponse> {
        throw new Error("Method not implemented.");
    }
}