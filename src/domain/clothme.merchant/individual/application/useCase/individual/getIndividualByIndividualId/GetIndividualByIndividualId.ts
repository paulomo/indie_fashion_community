import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { GetIndividualByIndividualIdDTO } from "./GetIndividualByIndividualIdDTO";
import { GetIndividualByIndividualIdResponse } from "./GetIndividualByIndividualIdResponse";
import { IIndividualRepository } from "../../../../domain/repository/IIndividualRepository";


export class GetIndividualByIndvidualId implements IUseCase<GetIndividualByIndividualIdDTO, Promise<GetIndividualByIndividualIdResponse>> {
    private individualRepo: IIndividualRepository;

    constructor(individualRepo: IIndividualRepository) {
        this.individualRepo = individualRepo;
    }

    public async execute (request: GetIndividualByIndividualIdDTO) : Promise<GetIndividualByIndividualIdResponse> {
        throw new Error("Method not implemented.");
    }
}