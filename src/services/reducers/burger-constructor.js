import { ADD_INGREDIENT, DELETE_INGREDIENT, CHANGE_BUN, SORT_CARD } from "../actions/burger-constructor";



const initialState = {
  ingredients: [],
  bun: {}
}


export const burgerConstructorReducer = (state = initialState, action) => {
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
