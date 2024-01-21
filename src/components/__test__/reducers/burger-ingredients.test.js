import {burgerIngredientsReducer} from "../../../services/reducers/burger-ingredients";
import {initialState} from "../../../services/reducers/burger-ingredients";
import {ingredientsTestData} from "../data/data";
import {
  DECREASE_COUNT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS, INCREASE_COUNT, REVERSE_BUN
} from "../../../services/constants/burger-ingredients";


describe('check initialState and all burger ingredients reducers',() => {
  test('should return initialState',() => {
    const action = {}
    const received = burgerIngredientsReducer(undefined, action)
    expect(received).toEqual(initialState)
  })

  test('should return case GET_INGREDIENTS_REQUEST', () => {
    const action = {
      type: GET_INGREDIENTS_REQUEST
    }
    const received = burgerIngredientsReducer(initialState, action)
    expect(received).toEqual({
        ...initialState,
        ingredientsRequest: true,
      })
  })

  test('should return case GET_INGREDIENTS_SUCCESS', () => {
    const action = {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: ingredientsTestData
    }
    const received = burgerIngredientsReducer(initialState, action)

    expect(received).toEqual({
      ...initialState,
      ingredientsRequest: false,
      isSuccess: true,
      ingredients: action.ingredients
    })
  })

  test('should return case GET_INGREDIENTS_FAILED', () => {
    const action = {
      type: GET_INGREDIENTS_FAILED,
      ingredients: ingredientsTestData
    }
    const received = burgerIngredientsReducer(initialState, action)

    expect(received).toEqual({
      ...initialState,
      ingredientsRequest: false,
      isSuccess: false,
      ingredients: [],
    })
  })

  test('should return case REVERSE_BUN', () => {
    const action = {
      type: REVERSE_BUN,
      ingredient: {
        "_id": "60666c42cc7b410027a1a9b1",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0,
        quantity: 0
      },
      _id: '60666c42cc7b410027a1a9b1'
    }
    const state = {
      ingredients:
        [
        {
          "_id": "60666c42cc7b410027a1a9b1",
          "name": "Краторная булка N-200i",
          "type": "bun",
          "proteins": 80,
          "fat": 24,
          "carbohydrates": 53,
          "calories": 420,
          "price": 1255,
          "image": "https://code.s3.yandex.net/react/code/bun-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
          "__v": 0,
          quantity: 0
        },
        {
          "_id":"60666c42cc7b410027a1a9b5",
          "name":"Говяжий метеорит (отбивная)",
          "type":"main",
          "proteins":800,
          "fat":800,
          "carbohydrates":300,
          "calories":2674,
          "price":3000,
          "image":"https://code.s3.yandex.net/react/code/meat-04.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
          "__v":0,
          quantity: 0
        },
        {
          "_id":"60666c42cc7b410027a1a9b6",
          "name":"Биокотлета из марсианской Магнолии",
          "type":"main",
          "proteins":420,
          "fat":142,
          "carbohydrates":242,
          "calories":4242,
          "price":424,
          "image":"https://code.s3.yandex.net/react/code/meat-01.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
          "__v":0,
          quantity: 0,
        },
        ]
    }
    const received = burgerIngredientsReducer(state, action)
    expect(received).toEqual(
      { ingredients:
        [{
          _id: "60666c42cc7b410027a1a9b1",
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
          quantity: 2
        },
        {
          "_id":"60666c42cc7b410027a1a9b5",
          "name":"Говяжий метеорит (отбивная)",
          "type":"main",
          "proteins":800,
          "fat":800,
          "carbohydrates":300,
          "calories":2674,
          "price":3000,
          "image":"https://code.s3.yandex.net/react/code/meat-04.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
          "__v":0,
          quantity: 0
        },
        {
          "_id":"60666c42cc7b410027a1a9b6",
          "name":"Биокотлета из марсианской Магнолии",
          "type":"main",
          "proteins":420,
          "fat":142,
          "carbohydrates":242,
          "calories":4242,
          "price":424,
          "image":"https://code.s3.yandex.net/react/code/meat-01.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
          "__v":0,
          quantity: 0,
        },]
      })
  })

  test('should return case INCREASE_COUNT', () => {
    const action = {
      type: INCREASE_COUNT,
      ingredient: {
        "_id":"60666c42cc7b410027a1a9bf",
        "name":"Сыр с астероидной плесенью",
        "type":"main",
        "proteins":84,
        "fat":48,
        "carbohydrates":420,
        "calories":3377,
        "price":4142,
        "image":"https://code.s3.yandex.net/react/code/cheese.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
        "__v":0,
        quantity: 0
      },
      _id: '60666c42cc7b410027a1a9bf'
    }
    const state = {
      ingredients: [
        {
          "_id":"60666c42cc7b410027a1a9bf",
          "name":"Сыр с астероидной плесенью",
          "type":"main",
          "proteins":84,
          "fat":48,
          "carbohydrates":420,
          "calories":3377,
          "price":4142,
          "image":"https://code.s3.yandex.net/react/code/cheese.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
          "__v":0,
          quantity: 1
        },
        {
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
          "__v":0,
          quantity: 1
        },
      ]
    }
    const received = burgerIngredientsReducer(state, action)
    expect(received).toEqual({
      ingredients: [
        {
          "_id":"60666c42cc7b410027a1a9bf",
          "name":"Сыр с астероидной плесенью",
          "type":"main",
          "proteins":84,
          "fat":48,
          "carbohydrates":420,
          "calories":3377,
          "price":4142,
          "image":"https://code.s3.yandex.net/react/code/cheese.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
          "__v":0,
          quantity: 2
        },
        {
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
          "__v":0,
          quantity: 1
        },
      ]
    })
  })

  test('should return case DECREASE_COUNT', () => {
    const action = {
      type: DECREASE_COUNT,
      ingredient: {
        "_id":"60666c42cc7b410027a1a9bf",
        "name":"Сыр с астероидной плесенью",
        "type":"main",
        "proteins":84,
        "fat":48,
        "carbohydrates":420,
        "calories":3377,
        "price":4142,
        "image":"https://code.s3.yandex.net/react/code/cheese.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
        "__v":0,
        quantity: 0
      },
      _id: '60666c42cc7b410027a1a9bf'
    }
    const state = {
      ingredients: [
        {
          "_id":"60666c42cc7b410027a1a9bf",
          "name":"Сыр с астероидной плесенью",
          "type":"main",
          "proteins":84,
          "fat":48,
          "carbohydrates":420,
          "calories":3377,
          "price":4142,
          "image":"https://code.s3.yandex.net/react/code/cheese.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
          "__v":0,
          quantity: 1
        },
        {
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
          "__v":0,
          quantity: 1
        },
      ]
    }
    const received = burgerIngredientsReducer(state, action)
    expect(received).toEqual({
      ingredients: [
        {
          "_id":"60666c42cc7b410027a1a9bf",
          "name":"Сыр с астероидной плесенью",
          "type":"main",
          "proteins":84,
          "fat":48,
          "carbohydrates":420,
          "calories":3377,
          "price":4142,
          "image":"https://code.s3.yandex.net/react/code/cheese.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
          "__v":0,
          quantity: 0
        },
        {
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
          "__v":0,
          quantity: 1
        },
      ]
    })
  })
})
