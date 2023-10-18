import React, { useEffect } from 'react';
import style from '../App/app.module.css'
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/Burger-ingredients";
import BurgerConstructor from "../burger-constructor/Burger-constructor";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_INGREDIENT_DETAILS_MODAL, UNSELECT_INGREDIENT} from "../../services/actions/details";
import {selectIngredient} from '../../services/reducers/details'
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import {Modal} from "../modal/modal";
import {getIngredients} from "../../services/reducers/burger-ingredients";
import {CLOSE_ORDER_INFO_MODAL} from "../../services/actions/order-info";

function App() {

  const dispatch = useDispatch();

  const ingredientDetailsModal = useSelector(state => state.ingredientDetails.modalIsOpen);
  const orderInfoModal = useSelector(state => state.orderInfo.modalIsOpen)
  const handleCloseOrderDetails = () => {
    dispatch({
      type: CLOSE_ORDER_INFO_MODAL
    })
  }

  function handleClose() {
    dispatch({
      type: CLOSE_INGREDIENT_DETAILS_MODAL
    });
    dispatch({
      type: UNSELECT_INGREDIENT
    });
  }
  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
     <div className="App">
      <AppHeader />
      <main className={`${style.flexContainer} + pt-10`}>
        <BurgerIngredients />
        <BurgerConstructor/>
      </main>
       {
         ingredientDetailsModal && (
           <Modal onClose={handleClose} header="Детали ингредиента">
             <IngredientDetails data={selectIngredient}/>
           </Modal>
         )
       }
       {orderInfoModal &&
         <Modal onClose={handleCloseOrderDetails}>
           <OrderDetails />
         </Modal>}
    </div>
  );
}

export default App;
