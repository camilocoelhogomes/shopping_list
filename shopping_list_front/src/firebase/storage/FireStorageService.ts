import { FirebaseStorage, ref, uploadString } from "firebase/storage";

export class FireStorageService {

  private readonly storage: FirebaseStorage;
  static messagingSenderId: any;

  constructor(storage: FirebaseStorage) {
    this.storage = storage;

  }
  async uploadFile(image: string, productName: string): Promise<string> {
    try {
      const sRef = ref(this.storage, `images/t${productName}.jpg`);
      const result = await uploadString(sRef, image, 'data_url');
      console.log(result)
      return result.ref.fullPath;
    } catch (error) {
      console.error(error);
      throw error;
    }

  }
}