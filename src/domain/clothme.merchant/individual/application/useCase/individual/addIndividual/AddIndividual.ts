import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { AddIndividualDTO } from "./AddIndividualDTO";
import { AddIndividualResponse } from "./AddIndividualResponse";
import { IIndividualRepository } from "../../../../domain/repository/IIndividualRepository";



export class AddIndividual implements IUseCase<AddIndividualDTO, Promise<AddIndividualResponse>> {
    private individualRepo: IIndividualRepository;

    constructor(individualRepo: IIndividualRepository) {
        this.individualRepo = individualRepo;
    }

    public async execute (request: AddIndividualDTO) : Promise<AddIndividualResponse> {
        throw new Error("Method not implemented.");
    }
}