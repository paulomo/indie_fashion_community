import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { AddBrandDTO } from "./AddBrandDTO";
import { AddBrandResponse } from "./AddBrandResponse";
import { IBrandRepository } from "../../../../domain/repository/brand/IBrandRespository";


export class AddBrand implements IUseCase<AddBrandDTO, AddBrandResponse> {
    private brandRepo: IBrandRepository

    constructor(brandRepo: IBrandRepository) {
        this.brandRepo = brandRepo
    }

    public execute(request?: AddBrandDTO) : Promise<AddBrandResponse> {
        throw new Error("Method not implemented.");
    }
}