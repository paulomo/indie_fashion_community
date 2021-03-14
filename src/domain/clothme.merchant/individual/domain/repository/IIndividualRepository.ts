import { IDTO } from "../../../../clothme.shared.kernel/application/dto/Idto";
import { IRepository } from "../../../../clothme.shared.kernel/domain/repository/IRepository";
import { Individual } from "../entity/Individual";

export interface IIndividualRepository extends IRepository<Individual> {
    addIndividual(data: IDTO) : Promise<Individual>;
    getIndividualById(data: IDTO) : Promise<Individual>;
    editIndividual(data: IDTO) : Promise<Individual>;
    suspendIndividual(data: IDTO) : Promise<void>;
}