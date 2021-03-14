import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { EditIndividualDTO } from "./EditIndividualDTO";
import { EditIndividualResponse } from "./EditIndividualResponse";
import { IIndividualRepository } from "../../../../domain/repository/IIndividualRepository";



export class EditIndividual implements IUseCase<EditIndividualDTO, Promise<EditIndividualResponse>> {
    private individualRepo: IIndividualRepository;

    constructor(individualRepo: IIndividualRepository) {
        this.individualRepo = individualRepo;
    }

    public async execute (request: EditIndividualDTO) : Promise<EditIndividualResponse> {
        throw new Error("Method not implemented.");
    }
}