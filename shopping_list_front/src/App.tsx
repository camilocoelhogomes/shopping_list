import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { ShoppingListPage } from './shopping_list/ShoppingListPage';
import { AuthPage } from './auth/AuthPage';
import { Router } from './router/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { FirebaseConfig, FirebaseContext } from './firebase/FirebaseContext';
import { useState } from 'react';
import { User } from 'firebase/auth';

setupIonicReact();

const App: React.FC = () => {

  const [user, setUser] = useState<User | undefined>()

  return (
    <FirebaseContext.Provider value={{ firebaseConfig: new FirebaseConfig(user, setUser) }}>
      <Provider store={store}>
        <IonApp>
          <Router />
        </IonApp>
      </Provider>
    </FirebaseContext.Provider>


  );
};

export default App;
