// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";

class FirebaseConfig {
  private app: FirebaseApp;

  constructor() {
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
  }

  public getFirebaseApp() {
    return this.app;
  }
}

export const firebaseConfigInstance = new FirebaseConfig();
