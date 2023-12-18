import {
  CLOSE_ORDER_INFO_MODAL,
  OPEN_ORDER_INFO_MODAL,
  POST_ORDER_FAILED,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS
} from "../constants/order-info";
import {TOrderInfoAction} from "../actions/order-info";

type TState = {
  orderId: number | null,
  name: string,
  OrderRequest: boolean,
  isSuccess: boolean,
  modalIsOpen: boolean,
}
const initialState: TState = {
  orderId: null,
  name: '',
  OrderRequest: false,
  isSuccess: false,
  modalIsOpen: false,
}

export const orderInfoReducer = (state: TState = initialState, action: TOrderInfoAction): TState => {
  switch(action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        OrderRequest: true,
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        OrderRequest: false,
        orderId: action.order,
        name: action.name,
      };
    }
    case POST_ORDER_FAILED: {
      return {
        ...state,
        isSuccess: false,
        OrderRequest: false,
      }
    }
    case OPEN_ORDER_INFO_MODAL: {
      return {
        ...state,
        modalIsOpen: true,
      }
    }
    case CLOSE_ORDER_INFO_MODAL: {
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
