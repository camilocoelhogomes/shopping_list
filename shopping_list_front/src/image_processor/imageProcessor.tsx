import React, { useEffect, useRef, useState } from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { Jimp, JimpInstance } from "jimp";

export interface ImageProcessorProps {
  imageB64: string;
}

export const ImageProcessor: React.FC<ImageProcessorProps> = ({ imageB64 }) => {

  const [jimpImage, setJimpImage] = useState();
  const [image, setImage] = useState<string | undefined>(undefined);
  const [transformedImage, setTransformedImage] = useState(undefined);




  return (
    <h1>teste</h1>
  )
}