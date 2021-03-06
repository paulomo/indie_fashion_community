import { FirebaseApi } from './config/FirebaseApi';
import { collectionConstant } from './config/DBConstant';

export class AccountFirebaseService {
  constructor() {
    this.useSaveDataToAccount = this.useSaveDataToAccount.bind(this);
    this.useLoadDataFrom = this.useLoadDataFrom.bind(this);
  }

  async useSaveDataToAccount(data: any) {
    const api = new FirebaseApi();
    try {
      const response = await api.writeCollectionDoc(collectionConstant.userAccount, data);
      return response;
    } catch (error) {
      return error;
    }
  }

  async useLoadDataFrom(data: any) {
    const api = new FirebaseApi();
    try {
      const response = await api.getCollectionDoc(collectionConstant.userAccount, data);
      return response;
    } catch (error) {
      return error;
    }
  }
}
