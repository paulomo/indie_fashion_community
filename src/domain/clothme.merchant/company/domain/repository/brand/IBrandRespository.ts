import { IRepository } from "../../../../../clothme.shared.kernel/domain/repository/IRepository";
import { Brand } from "../../entity/brand/Brand";
import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";


export interface IBrandRepository extends IRepository<Brand> {

    addBrand (data: IDTO) : Promise<Brand>;
    getAllBrand (data: IDTO) : Promise<Brand[]>;
    getBrandByBrandId (data: IDTO) : Promise<Brand>;
    getAllBrandByLocationId (data: IDTO) : Promise<Brand>;
    getBrandByBrandName (data: IDTO) : Promise<Brand>;
    publishBrand(data: IDTO) : Promise<Brand>;
    unPublishBrand (data: IDTO) : Promise<void>;

}