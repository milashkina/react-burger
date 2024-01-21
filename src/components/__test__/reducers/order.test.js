import {initialState, orderReducer} from "../../../services/reducers/order";
import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "../../../services/constants/order";


describe('check initialState', () => {
  test('should return initialState', () => {
    const action = {}
    const received = orderReducer(undefined, action)
    expect(received).toEqual(initialState)
  })

  test('should return case GET_ORDER_REQUEST', () => {
    const action = {
      type: GET_ORDER_REQUEST
    }
    const received = orderReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      orderRequest: true,
    })
  })
  test('should return case GET_ORDER_SUCCESS', () => {
    const data = {
      _id: '65a66e6987899c001b8294b9',
      ingredients: [
        {
          "_id":"60666c42cc7b410027a1a9b2",
          "name":"Флюоресцентная булка R2-D3",
          "type":"bun",
          "proteins":44,
          "fat":26,
          "carbohydrates":85,
          "calories":643,
          "price":988,
          "image":"https://code.s3.yandex.net/react/code/bun-01.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
          "__v":0
        },
        {
          "_id":"60666c42cc7b410027a1a9ba",
          "name":"Соус с шипами Антарианского плоскоходца",
          "type":"sauce",
          "proteins":101,
          "fat":99,
          "carbohydrates":100,
          "calories":100,
          "price":88,
          "image":"https://code.s3.yandex.net/react/code/sauce-01.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/sauce-01-large.png",
          "__v":0
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
          "__v":0
        },
        {
          "_id":"60666c42cc7b410027a1a9b2",
          "name":"Флюоресцентная булка R2-D3",
          "type":"bun",
          "proteins":44,
          "fat":26,
          "carbohydrates":85,
          "calories":643,
          "price":988,
          "image":"https://code.s3.yandex.net/react/code/bun-01.png",
          "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
          "__v":0
        }
      ],
      status: 'done',
      name: 'Антарианский люминесцентный флюоресцентный бургер',
      createdAt: '2024-01-16T11:54:17.440Z',
      updatedAt: '2024-01-16T11:54:18.043Z',
      number: '31761',
    }
    const action = {
      type: GET_ORDER_SUCCESS,
      data
    }
    const received = orderReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      orders: action.data,
      isSuccess: true,
      orderRequest: false,
    })
  })
  test('should return case GET_ORDER_FAILED', () => {
    const action = {
      type: GET_ORDER_FAILED
    }
    const received = orderReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      isSuccess: false,
      orderRequest: false,
      isError: true,
    })
  })
})
