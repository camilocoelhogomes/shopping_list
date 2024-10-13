import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { useEffect } from "react";

export function usePhotoGallery() {

  useEffect(() => {
    defineCustomElements(window);
  }, [])


  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      quality: 50,
      allowEditing: false,
      width: 320,
      height: 320,
    });
    console.log(photo.base64String);
    return photo.base64String!;
  };
  return {
    takePhoto,
  };
}