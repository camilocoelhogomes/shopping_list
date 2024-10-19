import { Auth, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfigInstance } from "../FirebaseConfig";

export class FirebaseAuthService {

  private provider = new GoogleAuthProvider();
  private auth: Auth;

  constructor(auth: Auth) {
    this.auth = auth;
    this.auth.useDeviceLanguage();
  }


  public async siginInWithGoogle() {
    try {
      return signInWithPopup(this.auth, this.provider);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const firebaseAuthService = new FirebaseAuthService(getAuth(firebaseConfigInstance.getFirebaseApp()));