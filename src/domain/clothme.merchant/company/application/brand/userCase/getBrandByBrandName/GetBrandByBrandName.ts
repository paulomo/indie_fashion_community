import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { GetBrandByBrandNameDTO } from "./GetBrandByBrandNameDTO";
import { GetBrandByBrandNameResponse } from "./GetBrandByBrandNameResponse";
import { IBrandRepository } from "../../../../domain/repository/brand/IBrandRespository";


export class AddBrand implements IUseCase<GetBrandByBrandNameDTO, GetBrandByBrandNameResponse> {
    private brandRepo: IBrandRepository

    constructor(brandRepo: IBrandRepository) {
        this.brandRepo = brandRepo
    }

    public execute(request?: GetBrandByBrandNameDTO) : Promise<GetBrandByBrandNameResponse> {
        throw new Error("Method not implemented.");
    }
}