import { IDTO } from "../../application/dto/Idto";


export interface IRepository<T> {
    remove(data: IDTO) : Promise<T>;
}