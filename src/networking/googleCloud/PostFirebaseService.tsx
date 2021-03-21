import { collectionConstant } from './config/DBConstant';
import { dbService } from './util/Util';

export class PostFirebaseService {
  constructor() {
    this.useCreatePost = this.useCreatePost.bind(this);
    this.useReadSinglePost = this.useReadSinglePost.bind(this);
    this.useReadAllPost = this.useReadAllPost.bind(this);
  }

  async useCreatePost(data: any) {
    try {
      const response = dbService.collection(collectionConstant.jobPost).doc(data.id).set(data);
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  }

  async useReadSinglePost(data: any) {
    try {
      const response = dbService.collection(collectionConstant.jobPost).doc(data.email).get();
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  }

  async useReadAllPost() {
    try {
      const response = dbService.collection(collectionConstant.jobPost).get();
      return (await response).docs.map((doc) => doc.data());
    } catch (error) {
      throw new Error();
    }
  }
}
