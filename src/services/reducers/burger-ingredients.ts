import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from "../constants/burger-ingredients";
import {INGREDIENTS_TITLES} from "../../utils/constant";
import {REVERSE_BUN} from "../constants/burger-ingredients";
import {TIngredientCardData,} from "../../types/types";
import {TIngredientsAction} from "../actions/burger-ingredients";

type TState = {
  ingredients: TIngredientCardData[] ,
  ingredientsRequest: boolean,
  isSuccess: boolean,
  elem: string,
}
const initialState: TState = {
  ingredients: [],
  ingredientsRequest: false,
  isSuccess: false,
  elem: INGREDIENTS_TITLES.BUN,
};


export const burgerIngredientsReducer = (state: TState = initialState, action: TIngredientsAction): TState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        isSuccess: true,
        ingredients: action.ingredients
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        isSuccess: false,
        ingredients: [],
      }
    }
    case REVERSE_BUN: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          if (ingredient.type === 'bun') {
            const quantity: 0 | 2 = ingredient._id === action._id ? 2 : 0
            return {...ingredient, quantity }
          } else {
            return ingredient;
          }
        })
      }
    }
    case INCREASE_COUNT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          return ingredient._id === action.ingredient._id ? { ...ingredient, quantity: ++ingredient.quantity } : ingredient;
        })
      }
    }
    case DECREASE_COUNT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          return ingredient._id === action.ingredient._id ? { ...ingredient, quantity: --ingredient.quantity } : ingredient;
        })
      }
    }
    default: {
      return state;
    }
  }
};
