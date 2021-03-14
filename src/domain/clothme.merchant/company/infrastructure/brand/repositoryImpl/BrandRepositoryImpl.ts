import { IBrandRepository } from "../../../domain/repository/brand/IBrandRespository";
import { Api } from "../../../../../clothme.shared.kernel/infrastructure/http/Api";
import { Brand } from "../../../domain/entity/brand/Brand";
import { AddBrandDTO } from "../../../application/brand/userCase/addBrand/AddBrandDTO";
import { GetAllBrandDTO } from "../../../application/brand/userCase/getAllBrand/GetAllBrandDTO";
import { GetBrandByBrandIdDTO } from "../../../application/brand/userCase/getBrandByBrandId/GetBrandByBrandIdDTO";
import { GetBrandByBrandNameDTO } from "../../../application/brand/userCase/getBrandByBrandName/GetBrandByBrandNameDTO";
import { PublishBrandDTO } from "../../../application/brand/userCase/publishBrand/PublishBrandDTO";
import { GetBrandByLocationIdDTO } from "../../../application/brand/userCase/getBrandByLocationId/GetBrandByLocationIdDTO"
import { UnPublishBrandDTO } from "../../../application/brand/userCase/unPublishBrand/UnPublishBrandDTO";
import { RemoveCompanyDTO } from "../../../application/company/useCase/removeCompany/RemoveCompanyDTO";
import { BrandEndpoint } from "../endpoint/BrandEndpoint";


export class BrandRepository extends Api implements IBrandRepository {

    public constructor() {
        super(); 
        this.getAllBrand = this.getAllBrand.bind(this);
        this.getBrandByBrandId = this.getBrandByBrandId.bind(this);
        this.getBrandByBrandName = this.getBrandByBrandName.bind(this);
        this.publishBrand = this.publishBrand.bind(this);
        this.unPublishBrand = this.unPublishBrand.bind(this);
        this.getAllBrandByLocationId = this.getAllBrandByLocationId.bind(this);
        this.remove = this.remove.bind(this);
    }

    public async addBrand(data: AddBrandDTO): Promise<Brand> {
        const queryString = `?employeeId=${data.employeeId}`;
        const header = { Authorization: 'Bearer ' };
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: BrandEndpoint.ADD_BRAND + queryString,
                                data: JSON.stringify(data),
                                headers: header
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }


    /**
     * 
     * @param brandId 
     */

    public async getAllBrand (data: GetAllBrandDTO): Promise<Brand[]> {
        const queryString = `?employeeId=${data.employeeId}`;
        const header = { Authorization: 'Bearer ' };
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: BrandEndpoint.GET_ALL_BRAND + queryString,
                                data: JSON.stringify(data),
                                headers: header
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }


    /**
     * 
     * @param brandId 
     */

    public async getBrandByBrandId (data: GetBrandByBrandIdDTO): Promise<Brand> {
        const queryString = `?employeeId=${data.employeeId}`;
        const header = { Authorization: 'Bearer ' };
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: BrandEndpoint.GET_BRAND_BY_BRAND_ID + queryString,
                                data: JSON.stringify(data),
                                headers: header
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }


    /**
     * 
     * @param locationId 
     */

    public async getAllBrandByLocationId(data: GetBrandByLocationIdDTO): Promise<Brand> {
        const queryString = `?employeeId=${data.employeeId}`;
        const header = { Authorization: 'Bearer ' };
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: BrandEndpoint.GET_BRAND_BY_LOCATION_ID + queryString,
                                data: JSON.stringify(data),
                                headers: header
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }


    /**
     * 
     * @param brandName 
     */

    public async getBrandByBrandName(data: GetBrandByBrandNameDTO): Promise<Brand> {
        const queryString = `?employeeId=${data.employeeId}`;
        const header = { Authorization: 'Bearer ' };
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: BrandEndpoint.GET_BRAND_BY_LOCATION_NAME + queryString,
                                data: JSON.stringify(data),
                                headers: header
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }


    /**
     * 
     * @param brand 
     */

    public async publishBrand(data: PublishBrandDTO): Promise<Brand> {
        const queryString = `?employeeId=${data.employeeId}`;
        const header = { Authorization: 'Bearer ' };
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: BrandEndpoint.PUBLISH_BRAND + queryString,
                                data: JSON.stringify(data),
                                headers: header
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }


    /**
     * 
     * @param data 
     */

    public async unPublishBrand(data: UnPublishBrandDTO): Promise<void> {
        const queryString = `?employeeId=${data.employeeId}`;
        const header = { Authorization: 'Bearer ' };
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: BrandEndpoint.UNPUBLISH_BRAND + queryString,
                                data: JSON.stringify(data),
                                headers: header
                                })
            const result = response.data;
            
        } catch (error) {
            return error
        }
    }


    /**
     * 
     * @param data 
     */

    public async remove(data: RemoveCompanyDTO): Promise<Brand> {
        const queryString = `?employeeId=${data.employeeId}`;
        const header = { Authorization: 'Bearer ' };
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: BrandEndpoint.REMOVE_BRAND + queryString,
                                data: JSON.stringify(data),
                                headers: header
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }

}
