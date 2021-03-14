import { dbService } from "./util/Util";
import { collectionConstant } from "./config/DBConstant";

export class LocationService {

    static async addLocation(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId).set(data.data);

    }

    static async editLocation(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId).update(data.data);

    }

    static async getAllLocation(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location).get();
                            
    }

    static async getLocationByLocationId(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId).get();

    }

    static async getLocationByLocationName(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .where("locationName", "==", data.locationname).get();
    }

    static async launcLocation(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId).update(data.data);

    }

    static async pauseLocationOperation(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId).update(data.data);

    }

    static async removeLocation(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId)
                            .collection(collectionConstant.location)
                            .doc(data.locationId).update(data.data);
                            
    }

}