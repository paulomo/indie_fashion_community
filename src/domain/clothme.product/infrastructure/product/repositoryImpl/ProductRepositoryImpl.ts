import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Api } from "../../../../clothme.shared.kernel/infrastructure/http/Api";
import { Product } from "../../../domain/entity/product/Product";
import { IProductRepository } from "../../../domain/repository/product/IProductRepository";
import { GetProductByProductIdDTO } from "../../../application/product/useCase/getProductByProductId/GetProductByProductIdDTO";
import { IDTO } from "../../../../clothme.shared.kernel/application/dto/Idto";



export class ProductRepository extends Api implements IProductRepository {

    public constructor(config: AxiosRequestConfig) {
        super(); 
        this.getProductByProductId = this.getProductByProductId.bind(this);
    }
    

    public update(data: IDTO): Promise<Product> {
        throw new Error("Method not implemented.");
    }


    /**
     * 
     * @param productId 
     */

    public getProductByProductId(data: GetProductByProductIdDTO): Promise<Product> {
        throw new Error("Method not implemented.");
        let productId = data.productId; 
    }


    /**
     * 
     * @param productId 
     */

    public getAllProductByProductId(productId: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }


    /**
     * 
     * @param productId 
     */

    public findProductByProductId(productId: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }


    /**
     * 
     * @param productName 
     */

    public findProductByName(productName: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }


    /**
     * 
     * @param locationId 
     */

    public findProductByLocationId(locationId: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }


    /**
     * 
     * @param locationName 
     */

    public findProductByLocationName(locationName: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }


    /**
     * 
     * @param locationId 
     */

    public getAllproductByLocationId(locationId: string): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }


    /**
     * 
     */

    public exist() : Promise<Product> {
        throw new Error("Method not implemented.");
    }


    /**
     * 
     */

    public save() : Promise<Product> {
        throw new Error("Method not implemented.");
    }


    /**
     * 
     */

    public remove() : Promise<Product> {
        throw new Error("Method not implemented.");
    }

} 