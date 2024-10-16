import { IonSplitPane, IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Route, Redirect } from "react-router"
import { AuthPage } from "../auth/AuthPage"
import Menu from "../components/Menu"
import { ShoppingListPage } from "../shopping_list/ShoppingListPage"
import { OnboardingMerchant } from "../onboarding_merchant/OnboardingMerchant"
import { ForceSignIn } from "../auth/ForceSignIn"

export const Router = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
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
          <Route path="/" exact={true}>
            <Redirect to="/auth" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  )
}