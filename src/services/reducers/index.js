import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burger-ingredients";
import {ingredientDetailsReducer} from "./details";
import {burgerConstructorReducer} from "./burger-constructor";
import {orderInfoReducer} from "./order-info";
import {accessReducer} from "./access";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  orderInfo: orderInfoReducer,
  access: accessReducer,
});
