import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { useEffect } from "react";

export function usePhotoGallery() {

  useEffect(() => {
    defineCustomElements(window);
  }, [])


  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 100,
    });
    console.log({ photo })
  };
  return {
    takePhoto,
  };
}