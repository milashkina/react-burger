import {ingredientDetailsReducer, initialState} from "../../services/reducers/details";
import {
  CLOSE_INGREDIENT_DETAILS_MODAL,
  OPEN_INGREDIENT_DETAILS_MODAL,
  SELECT_INGREDIENT,
  UNSELECT_INGREDIENT
} from "../../services/constants/details";


describe('check initialState and details reducers', () => {
  test('should return initialState', () => {
    const action = {}
    const received = ingredientDetailsReducer(undefined, action)
    expect(received).toEqual(initialState)
  })

  test('should return case SELECT_INGREDIENT', () => {
    const ingredient =   {
      "_id":"60666c42cc7b410027a1a9b3",
      "name":"Филе Люминесцентного тетраодонтимформа",
      "type":"main",
      "proteins":44,
      "fat":26,
      "carbohydrates":85,
      "calories":643,
      "price":988,
      "image":"https://code.s3.yandex.net/react/code/meat-03.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png",
      "__v":0
    }
    const action = {
      type: SELECT_INGREDIENT,
      selectedIngredient: ingredient
    }
    const received = ingredientDetailsReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      selectedIngredient: action.selectedIngredient,
    })
  })

  test('should return case UNSELECT_INGREDIENT', () => {
    const ingredient =   {
      "_id":"60666c42cc7b410027a1a9b3",
      "name":"Филе Люминесцентного тетраодонтимформа",
      "type":"main",
      "proteins":44,
      "fat":26,
      "carbohydrates":85,
      "calories":643,
      "price":988,
      "image":"https://code.s3.yandex.net/react/code/meat-03.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png",
      "__v":0
    }
    const action = {
      type: UNSELECT_INGREDIENT,
      selectedIngredient: ingredient
    }
    const state = {
      selectedIngredient: ingredient,
      modalIsOpen: false,
    }
    const received = ingredientDetailsReducer(state, action)
    expect(received).toEqual({
      ...initialState,
      selectedIngredient: null,
      modalIsOpen: false,
    })
  })

  test('should return case OPEN_INGREDIENT_DETAILS_MODAL',() => {
    const action = {
      type: OPEN_INGREDIENT_DETAILS_MODAL,
    }
    const received = ingredientDetailsReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      modalIsOpen: true
    })
  })

  test('should return case CLOSE_INGREDIENT_DETAILS_MODAL',() => {
    const action = {
      type: CLOSE_INGREDIENT_DETAILS_MODAL,
    }
    const received = ingredientDetailsReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      modalIsOpen: false
    })
  })
})
