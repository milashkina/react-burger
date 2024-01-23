import {initialState, wsReducer} from "../../services/reducers/ws-reducer";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS, WS_GET_ORDERS
} from "../../services/constants/wsActionTypes";


describe('check initialState', () => {
  test('should return initialState' , () => {
    const action = {}
    const received = wsReducer(undefined, action)
    expect(received).toEqual(initialState)
  })
  test('should return case WS_CONNECTION_START' , () => {
    const action = {
      type: WS_CONNECTION_START
    }
    const received = wsReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      loading: true,
    })
  })
  test('should return case WS_CONNECTION_SUCCESS' , () => {
    const action = {
      type: WS_CONNECTION_SUCCESS
    }
    const received = wsReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      error: undefined,
      wsConnected: true,
    })
  })
  test('should return case WS_CONNECTION_ERROR' , () => {
    const action = {
      type: WS_CONNECTION_ERROR,
      payload: Event
    }
    const received = wsReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      error: action.payload,
      wsConnected: false,
      loading: false,
    })
  })
  test('should return case WS_CONNECTION_CLOSED' , () => {
    const action = {
      type: WS_CONNECTION_CLOSED
    }
    const received = wsReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      error: undefined,
      wsConnected: false,
      loading: false,
    })
  })
  test('should return case WS_GET_ORDERS' , () => {
    const action = {
      type: WS_GET_ORDERS,
      payload: {
        orders: [{
          _id: "6569d9ad7fd657001ba056c9",
          ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa093e", "643d69a5c3f7b9001cfa093d",],
          status: "done",
          name: "Люминесцентный флюоресцентный space бургер",
          createdAt: "2023-12-01T13:03:41.766Z",
          updatedAt: "2023-12-01T13:03:42.124Z",
          number: 27841,
        }, {
          _id: "6569da8f7fd657001ba056cd",
          ingredients: ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa093c",],
          status: "done",
          name: "Краторный space бургер",
          createdAt: "2023-12-01T13:07:27.610Z",
          updatedAt: "2023-12-01T13:07:27.923Z",
          number:  27842,
        }],
        total:  31388,
        totalToday: 54,
        loading: false,
      }
    }
    const received = wsReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      error: undefined,
      orders: action.payload.orders,
      total: action.payload.total,
      totalToday: action.payload.totalToday,
      loading: false,
    })
  })
})
