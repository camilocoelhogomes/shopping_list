import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import api from '../service/api';

const SignUpPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        api.signUp({email, username: userName, password, confirmPassword});
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput 
                        value={userName} 
                        onIonChange={e => setUserName(e.detail.value!)} 
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput 
                        type="email" 
                        value={email} 
                        onIonChange={e => setEmail(e.detail.value!)} 
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput 
                        type="password" 
                        value={password} 
                        onIonChange={e => setPassword(e.detail.value!)} 
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Confirm Password</IonLabel>
                    <IonInput 
                        type="password" 
                        value={confirmPassword} 
                        onIonChange={e => setConfirmPassword(e.detail.value!)} 
                    />
                </IonItem>
                <IonButton expand="full" onClick={handleSignUp}>Sign Up</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default SignUpPage;