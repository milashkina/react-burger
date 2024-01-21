import {initialState, orderInfoReducer} from "../../../services/reducers/order-info";
import {
  CLOSE_ORDER_INFO_MODAL,
  OPEN_ORDER_INFO_MODAL,
  POST_ORDER_FAILED,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS
} from "../../../services/constants/order-info";


describe('check initialState', () => {
  test('should return initialState', () => {
    const action = {}
    const received = orderInfoReducer(undefined, action)
    expect(received).toEqual(initialState)
  })
  test('should return POST_ORDER_REQUEST', () => {
    const action = {
      type: POST_ORDER_REQUEST
    }
    const received = orderInfoReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      OrderRequest: true,
    })
  })
  test('should return case POST_ORDER_SUCCESS', () => {
    const res = {
      order: {
        number: ' 31762',
        name: 'Антарианский люминесцентный флюоресцентный бургер'
      }
    }
    const action = {
      type: POST_ORDER_SUCCESS,
      isSuccess: true,
      order: res.order.number,
      name: res.order.name
    }
    const received = orderInfoReducer(initialState, action)
    expect(received).toEqual({
      isSuccess: true,
      OrderRequest: false,
      orderId: action.order,
      name: action.name,
      modalIsOpen: false,
    })
  })
  test('should return POST_ORDER_FAILED', () => {
    const action = {
      type: POST_ORDER_FAILED
    }
    const received = orderInfoReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      isSuccess: false,
      OrderRequest: false,
    })
  })
  test('should return OPEN_ORDER_INFO_MODAL', () => {
    const action = {
      type: OPEN_ORDER_INFO_MODAL
    }
    const received = orderInfoReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      modalIsOpen: true,
    })
  })
  test('should return CLOSE_ORDER_INFO_MODAL', () => {
    const action = {
      type: CLOSE_ORDER_INFO_MODAL
    }
    const received = orderInfoReducer(initialState, action)
    expect(received).toEqual({
      ...initialState,
      modalIsOpen: false,
    })
  })
})
