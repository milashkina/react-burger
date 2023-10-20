import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  INCREASE_COUNT,
  DECREASE_COUNT, CHANGE_TAB,
} from "../actions/burger-ingredients";
import { INGREDIENTS_TITLES} from "../../utils/constant";
import {useGetIngredients} from "../../utils/useGetIngredients";
import {REVERSE_BUN} from "../actions/burger-ingredients";
import {DEFAULT_BUN} from "../actions/burger-constructor";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  isSuccess: false,
  elem: INGREDIENTS_TITLES.BUN,
};

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    useGetIngredients()
      .then((res) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data.map(ingredient => ({ ...ingredient, quantity: 0 })),
        })
      })
      .catch(() => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      })
  }
}

export const burgerIngredientsReducer = (state = initialState, action) => {
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
    case CHANGE_TAB: {
      return {
        ...state,
        elem: action.elem,
      }
    }
    case REVERSE_BUN: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          if (ingredient.type === 'bun') {
            const quantity = ingredient._id === action._id ? 2 : 0
            return {...ingredient, quantity }
          } else {
            return ingredient;
          }
        }),
        bun: { ...action.bun },
      }
    }
    case DEFAULT_BUN: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          return ingredient._id === action.bun._id ? { ...ingredient, quantity: ingredient.quantity+= 2 } : ingredient
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
