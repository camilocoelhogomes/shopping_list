import { FirebaseStorage } from "firebase/storage";

export class FireStorageService {

  private readonly storage: FirebaseStorage;

  constructor(storage: FirebaseStorage) {
    this.storage = storage;

  }
  async uploadFile(image: string, path: string): Promise<string> {
    console.log("uploadingFile")
    console.log(image)
    return '';
  }
}