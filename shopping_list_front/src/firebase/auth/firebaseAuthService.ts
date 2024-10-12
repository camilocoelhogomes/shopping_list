import { Auth, getAuth, GoogleAuthProvider, signInWithPopup, UserCredential } from "firebase/auth";

export class FirebaseAuthService{
  
  private provider = new GoogleAuthProvider();
  private auth: Auth;
  private credential?:UserCredential;

  constructor(auth: Auth){
    this.auth = auth;
    this.auth.useDeviceLanguage();
  }


  public async siginInWithGoogle(){
    try{
      this.credential = await signInWithPopup(this.auth, this.provider);
      console.log(this.credential);
    }catch(error){
      console.error(error);
      throw error;
    }
  }

  public getCredential(){
    return this.credential;
  }
}