import { collectionConstant } from './config/DBConstant';
import { dbService } from './util/Util';

export class ResourceFirebaseService {
  constructor() {
    this.useCreateResource = this.useCreateResource.bind(this);
    this.useReadSingleResource = this.useReadSingleResource.bind(this);
    this.useReadAllResource = this.useReadAllResource.bind(this);
  }

  async useCreateResource(data: any) {
    try {
      const response = dbService
        .collection(collectionConstant.resource)
        .doc(data.id)
        .set(data);
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  }

  async useReadSingleResource(data: any) {
    try {
      const response = dbService.collection(collectionConstant.collaboration).doc(data.email).get();
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  }

  async useReadAllResource() {
    try {
      const response = dbService.collection(collectionConstant.collaboration).get();
      return (await response).docs.map((doc) => doc.data());
    } catch (error) {
      throw new Error();
    }
  }
}
