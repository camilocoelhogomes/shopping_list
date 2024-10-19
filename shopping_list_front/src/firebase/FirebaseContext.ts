import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Auth, getAuth, User } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { createContext } from "react";

export class FirebaseConfig {

  readonly app: FirebaseApp;
  readonly auth: Auth;
  readonly storage: FirebaseStorage;
  readonly user: User | undefined;
  readonly setUser: (user: User) => void;

  constructor(user: User | undefined, setUser: (user: User) => void) {
    const firebaseConfig: FirebaseOptions = {
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN,
      databaseURL: import.meta.env.VITE_DATABASE_URL,
      projectId: import.meta.env.VITE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
      measurementId: import.meta.env.VITE_MEASUREMENT_ID
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.storage = getStorage(this.app);
    this.user = user;
    this.setUser = setUser;
  }

}



export const FirebaseContext = createContext<FirebaseConfig | undefined>(undefined);