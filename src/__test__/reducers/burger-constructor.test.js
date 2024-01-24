import {burgerConstructorReducer} from "../../services/reducers/burger-constructor";
import {initialState} from "../../services/reducers/burger-constructor";
import {ADD_INGREDIENT, CHANGE_BUN, DELETE_INGREDIENT, SORT_CARD} from "../../services/constants/burger-constructor";
import {ingredientsTestData} from "../data/data";
describe( 'check initialState and all burger-constructor reducers',() => {
  test('should return initialState', () => {
    const action = {}
    const received = burgerConstructorReducer(undefined, action)
    expect(received).toEqual(initialState)
  })

  test('should return case CHANGE_BUN',() => {
    const bun = {
      _id: "643d69a5c3f7b9001cfa093c",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
      quantity: 0
    }
    const action = {
      type: CHANGE_BUN,
      bun
    }
    const received = burgerConstructorReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      bun: action.bun,
      ingredients: []
    })
  })

  test('should return case ADD_INGREDIENT', ()=> {
    const ingredient = {
      _id : "643d69a5c3f7b9001cfa0941",
      name : "Биокотлета из марсианской Магнолии",
      type : "main",
      proteins : 420,
      fat : 142,
      carbohydrates : 242,
      calories : 4242,
      price : 424,
      image : "https://code.s3.yandex.net/react/code/meat-01.png",
      image_mobile : "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      image_large : "https://code.s3.yandex.net/react/code/meat-01-large.png",
      __v : 0,
      quantity : 0,
    }
    const action = {
      type: ADD_INGREDIENT,
      payload: ingredient
    }
    const received = burgerConstructorReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      ingredients: [...initialState.ingredients , action.payload]
    })
  })

  test('should return case DELETE_INGREDIENT',() => {
    const ingredient = {
      _id : "643d69a5c3f7b9001cfa0941",
      name : "Биокотлета из марсианской Магнолии",
      type : "main",
      proteins : 420,
      fat : 142,
      carbohydrates : 242,
      calories : 4242,
      price : 424,
      image : "https://code.s3.yandex.net/react/code/meat-01.png",
      image_mobile : "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      image_large : "https://code.s3.yandex.net/react/code/meat-01-large.png",
      __v : 0,
      quantity : 0,
    }
    const action = {
      type: DELETE_INGREDIENT,
      ingredient
    }
    const state = {ingredients: [ingredient], bun: null}
    const received = burgerConstructorReducer(state, action)
    expect(received).toEqual({
      ...initialState,
      ingredients: [...initialState.ingredients].filter((ingredient, index) =>  index !== state.ingredients.indexOf(action.ingredient))
    })
  })

  test('should return case SORT_CARD', () => {
    const state  = {ingredients: ingredientsTestData.slice(0, 2), bun: null}
    const action = {
      type: SORT_CARD,
      dragIndex: 0,
      hoverIndex: 1,
    }
    const received = burgerConstructorReducer(state, action)
    expect(received).toEqual({
      ...initialState,
      ingredients:[ingredientsTestData[1], ingredientsTestData[0]]
    })
  })

})
