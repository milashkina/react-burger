import React, { useEffect } from 'react';
import AppHeader from "../app-header/app-header";
import {useDispatch, useSelector} from "react-redux";
import {selectIngredient} from '../../services/reducers/details'
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import {Modal} from "../modal/modal";
import {getIngredients} from "../../services/reducers/burger-ingredients";
import {CLOSE_ORDER_INFO_MODAL} from "../../services/actions/order-info";
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
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

function App() {

  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate()
  const orderInfoModal = useSelector(state => state.orderInfo.modalIsOpen)

  const handleCloseOrderDetails = () => {
    dispatch({
      type: CLOSE_ORDER_INFO_MODAL
    })
  }

  useEffect(() => {
    dispatch(getIngredients())
    dispatch(getUser())
  }, [dispatch]);

  return (
     <>
       <AppHeader />

         <Routes location={location?.state?.backgroundLocation || location}>
           <Route exact index path={PATH.HOME} element={<HomePage />} />

           <Route exact path={PATH.LOGIN} element={<ProtectedRouteElement onlyUnAuth element={<LoginPage />} />}  />
           <Route exact path={PATH.REGISTER} element={<ProtectedRouteElement onlyUnAuth element={<RegisterPage />} />}  />

           <Route exact path={PATH.FORGOT_PASSWORD} element={<ProtectedRouteElement onlyUnAuth element={<ForgotPasswordPage />} />}  />
           <Route exact path={PATH.RESET_PASSWORD} element={<ProtectedRouteElement onlyUnAuth element={<ResetPasswordPage />} />} />

           <Route exact path={PATH.PROFILE} element={<ProtectedRouteElement element={<ProfilePage />} />} />
           <Route exact path={PATH.PROFILE_ORDERS} element={<ProtectedRouteElement element={<ProfileOrdersPage />} />} />

           <Route exact path={PATH.INGREDIENT} element={<IngredientDetailsPage />} />

           <Route path={'*'} element={<NotFound404Page />} />
         </Routes>

         {location?.state?.backgroundLocation && (
           <Routes>
             <Route path={PATH.INGREDIENT} element={
               <Modal onClose={() => navigate(-1)} header="Детали ингредиента">
                 <IngredientDetails data={selectIngredient}/>
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
