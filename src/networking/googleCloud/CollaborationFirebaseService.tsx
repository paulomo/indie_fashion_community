import { collectionConstant } from './config/DBConstant';
import { dbService } from './util/Util';

export class CollaborationFirebaseService {
  constructor() {
    this.useCreateCollaboration = this.useCreateCollaboration.bind(this);
    this.useReadSingleCollaboration = this.useReadSingleCollaboration.bind(this);
    this.useReadAllCollaboration = this.useReadAllCollaboration.bind(this);
  }

  async useCreateCollaboration(data: any) {
    try {
      const response = dbService.collection(collectionConstant.collaboration).doc(data.id).set(data);
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  }

  async useReadSingleCollaboration(data: any) {
    try {
      const response = dbService.collection(collectionConstant.collaboration).doc(data.email).get();
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  }

  async useReadAllCollaboration() {
    try {
      const response = dbService.collection(collectionConstant.collaboration).get();
      return (await response).docs.map((doc) => doc.data());
    } catch (error) {
      throw new Error();
    }
  }
}
