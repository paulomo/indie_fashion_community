import { dbService  } from "./util/Util";
import { collectionConstant } from "./config/DBConstant";


export class CompanyService {

    static async addCompany(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId).set(data.data);
    }

    static async editCompany(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId).update(data.data);
    }

    static async getCompanyByCompanyId(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId).get();
    }

    static async pauseCompanyOperation(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId).update(data.data);
    }

    static async removeCompany(data: any) {
        return await dbService.collection(collectionConstant.company)
                            .doc(data.companyId).update(data.data);
    }

}