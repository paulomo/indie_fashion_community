import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { GetAllBrandDTO } from "./GetAllBrandDTO";
import { GetAllBrandResponse } from "./GetAllBrandResponse";
import { IBrandRepository } from "../../../../domain/repository/brand/IBrandRespository";


export class GetAllBrand implements IUseCase<GetAllBrandDTO, GetAllBrandResponse> {
    private brandRepo: IBrandRepository

    constructor(brandRepo: IBrandRepository) {
        this.brandRepo = brandRepo
    }

    public execute(request?: GetAllBrandDTO) : Promise<GetAllBrandResponse> {
        throw new Error("Method not implemented.");
    }
}