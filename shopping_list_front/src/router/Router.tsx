import { IonSplitPane, IonRouterOutlet, IonContent } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Route, Redirect } from "react-router"
import { AuthPage } from "../auth/AuthPage"
import { ShoppingListPage } from "../shopping_list/ShoppingListPage"
import { OnboardingMerchant } from "../onboarding/OnboardingMerchant"
import { ForceSignIn } from "../auth/ForceSignIn"
import { OnboardingUser } from "../onboarding/onboarding_user/OnboardingUser"

export const Router = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">

        <IonRouterOutlet>
          <Route path="/auth" exact={true}>
            <AuthPage />
          </Route>
          <Route path="/shopping-list" exact={true}>
            <ForceSignIn>
              <ShoppingListPage />
            </ForceSignIn>
          </Route>
          <Route path="/onboarding-merchant" exact={true}>
            <ForceSignIn>
              <OnboardingMerchant />
            </ForceSignIn>
          </Route>
          <Route path="/onboarding/User" exact={true}>
            <ForceSignIn>
              <OnboardingUser />
            </ForceSignIn>
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/auth" />
          </Route>
        </IonRouterOutlet>

      </IonSplitPane>
    </IonReactRouter>
  )
}