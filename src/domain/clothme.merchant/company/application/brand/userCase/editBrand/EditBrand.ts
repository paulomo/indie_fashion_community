import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { AddBrandDTO } from "./EditBrandDTO";
import { EditBrandResponse } from "./EditBrandResponse";
import { IBrandRepository } from "../../../../domain/repository/brand/IBrandRespository";


export class EditBrand implements IUseCase<AddBrandDTO, EditBrandResponse> {
    private brandRepo: IBrandRepository

    constructor(brandRepo: IBrandRepository) {
        this.brandRepo = brandRepo
    }

    public async execute(request?: AddBrandDTO) : Promise<EditBrandResponse> {
        throw new Error("Method not implemented.");
    }
}
