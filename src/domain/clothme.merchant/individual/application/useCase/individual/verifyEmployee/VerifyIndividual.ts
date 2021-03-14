import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { IIndividualRepository } from "../../../../domain/repository/IIndividualRepository";
import { VerifyIndividualDTO } from "./VerifyIndividualDTO";
import { VerifyIndividualResponse } from "./VerifyIndividualResponse";


export class VerifyIndividual implements IUseCase<VerifyIndividualDTO, Promise<VerifyIndividualResponse>> {
    private individualRepo: IIndividualRepository;

    constructor(individualRepo: IIndividualRepository) {
        this.individualRepo = individualRepo;
    }

    public async execute (request: VerifyIndividualDTO) : Promise<VerifyIndividualResponse> {
        throw new Error("Method not implemented.");
    }
}