import React, {FC, useEffect} from 'react';
import { AppHeader } from "../app-header/app-header";
import {useDispatch, useSelector} from "../../services/hook";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import {Modal} from "../modal/modal";
import {getIngredientsThunk} from "../../services/actions/burger-ingredients";
import {Route, Routes, useLocation, useNavigate, Location} from 'react-router-dom'
import {HomePage} from "../../pages/home/home";
import {PATH} from "../../utils/constant";
import {
  ForgotPasswordPage, IngredientDetailsPage,
  LoginPage,
  ProfileOrdersPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage, NotFound404Page
} from "../../pages/export-pages";
import {ProtectedRouteElement} from "../../utils/protected-route";
import {getUserThunk} from "../../services/actions/user";
import {closeOrderInfoModal} from "../../services/actions/order-info";
import {FeedPage} from "../../pages/feed/feed";
import {OrderIdFeedPage} from "../../pages/order-id-feed/order-id-feed";
import {OrderCard} from "../order-card/order-card";
import {unselectOrderAction} from "../../services/actions/feed";

export const App: FC = () => {

  const dispatch = useDispatch();
  const location = useLocation()

  const locationState = location.state as {backgroundLocation: Location}
  const background = locationState && locationState.backgroundLocation
  const navigate = useNavigate()
  const orderInfoModal = useSelector((state: any) => state.orderInfo.modalIsOpen)

  function handleCloseOrderDetails(): void {
    dispatch(closeOrderInfoModal())
  }
  function handleCloseIngredientInfo(): void {
    navigate(-1)
  }
  function handleCloseOrderFeedInfo(): void {
    navigate(-1)
    dispatch(unselectOrderAction())
  }

  useEffect(() => {
    dispatch(getIngredientsThunk())
    dispatch(getUserThunk())
  }, [dispatch]);

  return (
     <>
       <AppHeader />

         <Routes location={background || location}>
           <Route index path={PATH.HOME} element={<HomePage />} />

           <Route path={PATH.LOGIN} element={<ProtectedRouteElement onlyUnAuth element={<LoginPage />} />}  />
           <Route path={PATH.REGISTER} element={<ProtectedRouteElement onlyUnAuth element={<RegisterPage />} />}  />

           <Route path={PATH.FORGOT_PASSWORD} element={<ProtectedRouteElement onlyUnAuth element={<ForgotPasswordPage />} />}  />
           <Route path={PATH.RESET_PASSWORD} element={<ProtectedRouteElement onlyUnAuth element={<ResetPasswordPage />} />} />

           <Route path={PATH.PROFILE} element={<ProtectedRouteElement element={<ProfilePage />} />} />
           <Route path={PATH.PROFILE_ORDERS} element={<ProtectedRouteElement element={<ProfileOrdersPage />} />} />
           <Route path={PATH.ORDER} element={<ProtectedRouteElement element={<OrderIdFeedPage />} />} />

           <Route path={PATH.INGREDIENT} element={<IngredientDetailsPage />} />

           <Route path={PATH.FEED} element={<FeedPage />} />
           <Route path={PATH.FEED_ID} element={<OrderIdFeedPage />} />
           <Route path={'*'} element={<NotFound404Page />} />
         </Routes>
       {background && (
           <Routes>
             <Route
                 path={PATH.ORDER}
                 element={
                   <Modal onClose={handleCloseOrderFeedInfo}>
                     <OrderCard/>
                   </Modal>
                 } />
           </Routes>
       )}
         {background && (
             <Routes>
               <Route
                   path={PATH.FEED_ID}
                   element={
                     <Modal onClose={handleCloseOrderFeedInfo}>
                       <OrderCard/>
                     </Modal>
                   } />
             </Routes>
         )}

         {background && (
           <Routes>
             <Route
                 path={PATH.INGREDIENT}
                 element={
                   <Modal onClose={handleCloseIngredientInfo} header="Детали ингредиента">
                     <IngredientDetails/>
                   </Modal>
                 } />
           </Routes>
           )
         }

         {orderInfoModal &&
           <Modal onClose={handleCloseOrderDetails}>
             <OrderDetails />
           </Modal>}
    </>
  );
}

export default App;
