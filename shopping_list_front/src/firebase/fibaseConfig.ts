// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FirebaseAuthService } from "./auth/firebaseAuthService";
import { getAuth } from "firebase/auth";
import { FireStorageService } from "./storage/FireStorageService";
import { getStorage } from "firebase/storage";
import { useEffect } from "react";

class FirebaseAppFactory {
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

const firebaseAppFactory = new FirebaseAppFactory();

export const useFirebase = () => {
  return {
    firebaseAuthService: new FirebaseAuthService(getAuth(firebaseAppFactory.getFirebaseApp())),
    fireStorageService: new FireStorageService(getStorage(firebaseAppFactory.getFirebaseApp()))
  };
}