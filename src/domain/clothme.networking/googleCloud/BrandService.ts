import { dbService } from "./util/Util";
import { collectionConstant } from "./config/DBConstant";

export class BrandService {

    static async addBrand(data: any) {
        return dbService.collection(collectionConstant.company)
                        .doc(data.companyId)
                        .collection(collectionConstant.location)
                        .doc(data.locationId)
                        .collection(collectionConstant.brand)
                        .doc(data.brandId).set(data.data);

    }

    static async editBrand(data: any) {
        return dbService.collection(collectionConstant.company)
                        .doc(data.companyId)
                        .collection(collectionConstant.location)
                        .doc(data.locationId)
                        .collection(collectionConstant.brand)
                        .doc(data.brandId).update(data.data);

    }

    static async getAllBrand(data: any) {
        return dbService.collection(collectionConstant.company)
                        .doc(data.companyId)
                        .collection(collectionConstant.location)
                        .doc(data.locationId)
                        .collection(collectionConstant.brand).get();

    }

    static async getBrandByBrandId(data: any) {
        return dbService.collection(collectionConstant.company)
                        .doc(data.companyId)
                        .collection(collectionConstant.location)
                        .doc(data.locationId)
                        .collection(collectionConstant.brand)
                        .doc(data.brandId).get();

    }

    static async getBrandByBrandName(data: any) {
        return dbService.collection(collectionConstant.company)
                        .doc(data.companyId)
                        .collection(collectionConstant.location)
                        .doc(data.locationId)
                        .collection(collectionConstant.brand)
                        .doc(data.brandId).get();

    }

    static async getBrandByLocationId(data: any) {
        return dbService.collection(collectionConstant.company)
                        .doc(data.companyId)
                        .collection(collectionConstant.location)
                        .doc(data.locationId)
                        .collection(collectionConstant.brand).get();
                        
    }

    static async publishBrand(data: any) {
        return dbService.collection(collectionConstant.company)
                        .doc(data.companyId)
                        .collection(collectionConstant.location)
                        .doc(data.locationId)
                        .collection(collectionConstant.brand)
                        .doc(data.brandId).update(data.data);

    }

    static async removeBrand(data: any) {
        return dbService.collection(collectionConstant.company)
                        .doc(data.companyId)
                        .collection(collectionConstant.location)
                        .doc(data.locationId)
                        .collection(collectionConstant.brand)
                        .doc(data.brandId).update(data.data);

    }

    static async unPublishBrand(data: any) {
        return dbService.collection(collectionConstant.company)
                        .doc(data.companyId)
                        .collection(collectionConstant.location)
                        .doc(data.locationId)
                        .collection(collectionConstant.brand)
                        .doc(data.brandId).update(data.data)
    }

 }