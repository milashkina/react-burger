import {number, string} from "prop-types";
import {
  CLOSE_ORDER_INFO_MODAL,
  OPEN_ORDER_INFO_MODAL,
  POST_ORDER_FAILED,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS
} from "../actions/order-info";
import {usePostOrder} from "../../utils/usePostOrder";


const initialState = {
  orderId: number,
  name: string,
  OrderRequest: false,
  isSuccess: false,
  modalIsOpen: false,
}

export function postOrder(data) {
  return function (dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST,
    });
    usePostOrder(data)
      .then((res) => {
        dispatch({
          type: POST_ORDER_SUCCESS,
          isSuccess: true,
          orderId: res.order.number,
          name: res.name,
        })
        dispatch({
          type: OPEN_ORDER_INFO_MODAL,
        })
      })
      .catch(() => {
        dispatch({
          type: POST_ORDER_FAILED,
          isSuccess: false,
        })
      })
  }
}

export const orderInfoReducer = (state = initialState, action) => {
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
        isSuccess: action.success,
        OrderRequest: false,
        orderId: action.orderId,
        name: action.name,
      };
    }
    case POST_ORDER_FAILED: {
      return {
        ...state,
        isSuccess: action.success,
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
