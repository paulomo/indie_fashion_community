import { dbService } from './util/Util';
import { collectionConstant } from './config/DBConstant';


export class LeadsFirebaseService {
  constructor() {
    this.addConsumerLead = this.addConsumerLead.bind(this);
    this.addMerchantLead = this.addMerchantLead.bind(this);
    this.updateConsumerLead = this.updateConsumerLead.bind(this);
    this.updateMerchantLead = this.updateMerchantLead.bind(this);
  }
  
  async addConsumerLead(data: any): Promise<any> {
    return await dbService
      .collection(collectionConstant.consumerLead)
      .doc(data.email)
      .set(data);
  }

  async addMerchantLead(data: any): Promise<any> {
    return await dbService
      .collection(collectionConstant.merchantLead)
      .doc(data.brandId)
      .set(data);
  }

  async updateConsumerLead(data: any): Promise<any> {
    return await dbService
      .collection(collectionConstant.consumerLead)
      .doc(data.email)
      .update(data);
  }

  async updateMerchantLead(data: any): Promise<any> {
    return await dbService
      .collection(collectionConstant.merchantLead)
      .doc(data.brand.brandEmail)
      .update(data);
  }
  
}
