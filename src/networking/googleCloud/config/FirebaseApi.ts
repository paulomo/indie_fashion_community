import { dbService } from "../util/Util";

export class FirebaseApi {
  constructor() {
    this.getCollectionData = this.getCollectionData.bind(this);
    this.getCollectionDoc = this.getCollectionDoc.bind(this);
    this.removeDoc = this.removeDoc.bind(this);
    this.writeCollectionDoc = this.writeCollectionDoc.bind(this);
  }
  /**
   *
   * @param collection returns data for specified collections
   */
  getCollectionData = async (collection: any) => {
    const querySnapshot = await collection.get();
    const results = querySnapshot.docs.map((doc: any) => {
      return { ...doc.data(), id: doc.id };
    });
    return results;
  };

  /**
   * get document from firebase and not local photos
   *
   * @param collection
   * @param id
   */
  getCollectionDoc = async (collection: any, data: any) => {
    const doc = await dbService.collection(collection).doc(data.id).get();
    return { ...doc.data(), id: doc.id };
  };

  /**
   * delete document from firebase collection
   *
   * @param collection
   * @param id
   */
  removeDoc = async (collection: any, data: any) => {
    await dbService.collection(collection).doc(data.id).delete();
    return true;
  };

  /**
   *
   * @param collection
   * @param data
   */
  writeCollectionDoc = async (collection: any, data: any) => {
    await dbService
      .collection(collection)
      .doc(data.email)
      .set({ ...data }, { merge: true });
    return true;
  };
}
