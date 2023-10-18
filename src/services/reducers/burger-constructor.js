import {BUN_BY_DEFAULT} from "../../utils/constant";
import { ADD_INGREDIENT, DELETE_INGREDIENT, INITIAL_BUN, CHANGE_BUN, SORT_CARD } from "../actions/burger-constructor";



const initialState = {
  ingredients: [],
  bun: BUN_BY_DEFAULT
}


export const burgerConstructorReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_BUN: {
      return {
        ...state,
        bun: action.bun
      }
    }
    case INITIAL_BUN: {
      console.log('i am try add the same bun')
      return {
        ...state
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient]
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
    default: {
      return state;
    }
  }
}
