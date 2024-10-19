import { UserCredential } from "firebase/auth";
import { FirebaseConfig } from "./FirebaseContext";

export interface FirebaseContextDto {
  firebaseConfig: FirebaseConfig;
  userCredential: UserCredential;
}