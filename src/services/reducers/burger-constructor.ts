import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  CHANGE_BUN,
  SORT_CARD,
  CLEAN_CONSTRUCTOR
} from "../constants/burger-constructor";
import {TBun, TIngredientCardData} from "../../types/types";
import {TConstructorAction} from "../actions/burger-constructor";

type TState = {
  ingredients: TIngredientCardData[],
  bun: TBun | null
}

export const initialState: TState = {
  ingredients: [],
  bun: null
}


export const burgerConstructorReducer = (state : TState = initialState, action: TConstructorAction): TState => {
  switch(action.type) {
    case CHANGE_BUN: {
      return {
        ...state,
        bun: action.bun
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter((ingredient, index) =>  index !== state.ingredients.indexOf(action.ingredient))
      }
    }
    case SORT_CARD: {
      const newList = [...state.ingredients]
      newList.splice(action.dragIndex, 1)
      newList.splice(action.hoverIndex, 0, state.ingredients[action.dragIndex])
      return {
        ...state,
        ingredients: newList
      }
    }
    case CLEAN_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: [],
        bun: null
      }
    }
    default: {
      return state;
    }
  }
}
