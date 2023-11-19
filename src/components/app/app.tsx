import React, {FC, useEffect} from 'react';
import { AppHeader } from "../app-header/app-header";
import {useDispatch, useSelector} from "react-redux";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import {Modal} from "../modal/modal";
import {getIngredients} from "../../services/reducers/burger-ingredients";
import {CLOSE_ORDER_INFO_MODAL} from "../../services/actions/order-info";
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
import {getUser} from "../../services/reducers/access";

export const App: FC = () => {

  const dispatch = useDispatch();
  const location = useLocation()

  const locationState = location.state as {backgroundLocation: Location}
  const background = locationState && locationState.backgroundLocation
  const navigate = useNavigate()
  const orderInfoModal = useSelector((state: any) => state.orderInfo.modalIsOpen)

  function handleCloseOrderDetails(): void {
    dispatch({
      type: CLOSE_ORDER_INFO_MODAL
    })
  }
  function handleCloseIngredientInfo(): void {
    navigate(-1)
  }

  useEffect(() => {
    dispatch<any>(getIngredients())
    dispatch<any>(getUser())
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

           <Route path={PATH.INGREDIENT} element={<IngredientDetailsPage />} />

           <Route path={'*'} element={<NotFound404Page />} />
         </Routes>

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
