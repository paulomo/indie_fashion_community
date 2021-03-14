import { dbService } from "./util/Util";
import { collectionConstant } from "./config/DBConstant";

export class ProductService {

    static async addProduct(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId).set(data.data);

    }

    static async editProduct(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId).update(data.data);

    }

    static async getProductByBrandId(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId).get();

    }

    static async getProductByBrandName(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .where("productName", "==", data.productName).get();
                            
    }

    static async getProductByCompanyId(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
    }

    static async getProductByLocationId(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product).get();

    }

    static async getProductByProductName(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product).get();

    }

    static async publishProduct(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId).update(data.data);

    }

    static async unPublishProduct(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId).update(data.data);

    }

    static async removeProduct(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId).update(data.data);

    }

    static async editReplyToReview(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId)
                            .collection(collectionConstant.reviews)
                            .doc(data.reviewId).update(data.data);
                            
    }

    static async getReviewByProductId(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId)
                            .collection(collectionConstant.reviews).get();
                            
    }

    static async removeReplyToReview(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId)
                            .collection(collectionConstant.reviews)
                            
    }

    static async replyToReview(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId)
                            .collection(collectionConstant.product)
                            .doc(data.productId)
                            .collection(collectionConstant.reviews)
                            .doc(data.reviewId).update(data.data);
                            
    }


}