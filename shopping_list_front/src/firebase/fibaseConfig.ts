// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { FirebaseAuthService } from "./auth/firebaseAuthService";
import { getAuth } from "firebase/auth";
import { FireStorageService } from "./storage/FireStorageService";
import { getStorage } from "firebase/storage";
import { useEffect } from "react";

export const useFirebase = () => {
  const firebaseConfig: FirebaseOptions = {};
  let app: FirebaseApp = initializeApp(firebaseConfig);
  let firebaseAuthService: FirebaseAuthService | undefined = undefined;
  let firebaseStorageService: FireStorageService | undefined = undefined;

  useEffect(() => {
    firebaseConfig.apiKey = import.meta.env.VITE_API_KEY;
    firebaseConfig.authDomain = import.meta.env.VITE_AUTH_DOMAIN;
    firebaseConfig.databaseURL = import.meta.env.VITE_DATABASE_URL;
    firebaseConfig.projectId = import.meta.env.VITE_PROJECT_ID;
    firebaseConfig.storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
    //FireStorageService.messagingSenderId= import.meta.env.VITE_MESSAGING_SENDER_ID;
    firebaseConfig.measurementId = import.meta.env.VITE_MEASUREMENT_ID;
    app = initializeApp(firebaseConfig);
    firebaseAuthService = new FirebaseAuthService(getAuth(app));
    firebaseStorageService = new FireStorageService(getStorage(app));
  }, []);

  if (!firebaseAuthService || !firebaseStorageService) {
    firebaseAuthService = new FirebaseAuthService(getAuth(app));
    firebaseStorageService = new FireStorageService(getStorage(app));
  }

  return {
    firebaseAuthService,
    firebaseStorageService
  };
}
