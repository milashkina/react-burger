import {
  OPEN_INGREDIENT_DETAILS_MODAL,
  CLOSE_INGREDIENT_DETAILS_MODAL, SELECT_INGREDIENT, UNSELECT_INGREDIENT,
} from "../constants/details";
import {TDetailsAction} from "../actions/details";
import {TIngredientData} from "../../types/types";

type TState = {
  selectedIngredient: TIngredientData | null,
  modalIsOpen: boolean,
}

export const initialState: TState = {
  selectedIngredient: null,
  modalIsOpen: false,
}

export const ingredientDetailsReducer = (state: TState = initialState, action: TDetailsAction): TState  => {
  switch (action.type) {
    case SELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.selectedIngredient,
      }
    }
    case UNSELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: null,
      }
    }
    case OPEN_INGREDIENT_DETAILS_MODAL: {
      return {
        ...state,
        modalIsOpen: true,
      }
    }
    case CLOSE_INGREDIENT_DETAILS_MODAL: {
      return {
        ...state,
        modalIsOpen: false,
      }
    }
    default: {
      return state;
    }
  }
}
