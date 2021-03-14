import { IProduct } from "../../entity/product/IProduct";
import { IRepository } from "../../../../clothme.shared.kernel/domain/repository/IRepository";
import { IDTO } from "../../../../clothme.shared.kernel/application/dto/Idto";



export interface IProductRepository extends IRepository<IProduct> {
    getProductByProductId (data: IDTO) : Promise<IProduct>;
    getAllProductByProductId (productId: string) : Promise<IProduct[]>;
    findProductByProductId (productId: string) : Promise<IProduct>;
    findProductByName (productName: string) : Promise<IProduct>;
    findProductByLocationId (locationId: string) : Promise<IProduct>;
    findProductByLocationName (locationName: string) : Promise<IProduct>;
    getAllproductByLocationId (locationId: string) : Promise<IProduct[]>;
    // PublishProduct (companyId, locationId, employeeId, productId) {}
    // UnPublishProduct (companyId, locationId, employeeId, productId) {}

    /*
    SaveProduct (companyId, locationId, employeeId, productId) {}
    Read(companyId, locationId, employeeId, productId) {}
    Update(companyId, locationId, employeeId, productId) {}
    Remove(companyId, locationId, employeeId, productId) {}
    */
}