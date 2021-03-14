import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { GetIndividualByIndividualNameDTO } from "./GetIndividualByIndividualNameDTO";
import { GetIndividualByIndividualNameResponse } from "./GetIndividualByIndividualNameResponse";
import { IIndividualRepository } from "../../../../domain/repository/IIndividualRepository";


export class GetIndividualByIndvidualName implements IUseCase<GetIndividualByIndividualNameDTO, Promise<GetIndividualByIndividualNameResponse>> {
    private individualRepo: IIndividualRepository;

    constructor(individualRepo: IIndividualRepository) {
        this.individualRepo = individualRepo;
    }

    public async execute (request: GetIndividualByIndividualNameDTO) : Promise<GetIndividualByIndividualNameResponse> {
        throw new Error("Method not implemented.");
    }
}