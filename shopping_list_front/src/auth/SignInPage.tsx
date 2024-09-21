import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import api from '../service/api';

const SignInPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        api.signIn({ email, password })
        .then((data) => {console.log('Signed in:',data);})
        .catch((error) => {console.error('Error signing in:',error);});
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign In</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput
                        type="email"
                        value={email}
                        onIonChange={(e) => setEmail(e.detail.value!)}
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput
                        type="password"
                        value={password}
                        onIonChange={(e) => setPassword(e.detail.value!)}
                    />
                </IonItem>
                <IonButton expand="block" onClick={handleSignIn}>
                    Sign In
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default SignInPage;