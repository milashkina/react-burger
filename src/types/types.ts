import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS,
    WS_SEND_ORDER
} from "../services/constants/wsActionTypes";

export type TIngredientData = {
    _id: string;
    name: string;
    type: string;
    proteins?: number;
    fat?: number;
    carbohydrates?: number;
    calories?: number;
    price: number;
    image: string;
    image_mobile?: string;
    image_large?: string;
    __v?: number;
}

export type TBun = TIngredientCardData

export type TIngredientCardData = TIngredientData & {
    uniqueId?: string,
    quantity: number;
}

export type TConstructorIngredient = TIngredientData & {
    index?: number;
}

export type TSize = {
    DEFAULT: 'default',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

export type TInput = {
    TYPE: {
        EMAIL: 'email';
        TEXT: 'text',
        PASSWORD: 'password',
    };
    NAME: {
        EMAIL: 'email',
        NAME: 'name',
        PASSWORD: 'password',
        CODE: 'token',
    };
    PLACEHOLDER: {
        EMAIL: string,
        PASSWORD: string,
        NAME: string,
        RESTORE: string,
        NEW_PASS: string,
        CODE: string,
    }
}

export type TFormValue = {
    email: string,
    password: string,
    name: string,
}

export type TForgotPasswordData = Pick<TFormValue, 'email'>
export type TLoginData = Pick<TFormValue, 'email' | 'password'>

export const STATUS = {
    DONE: 'Выполнен',
    PENDING: 'Готовится',
    CREATED: 'Создан',
    CANCELED: 'Отменен',
}

//TYPE API REQUEST DOWNWARDS

export type TWSOrderActions = {
    wsInit: typeof WS_CONNECTION_START,
    onOpen: typeof WS_CONNECTION_SUCCESS,
    onClose: typeof WS_CONNECTION_CLOSED,
    onError: typeof WS_CONNECTION_ERROR,
    onOrders: typeof WS_GET_ORDERS,
    onSendOrders: typeof WS_SEND_ORDER,
}

export type TServerResponse<T> = {
    success: boolean
} & T

export type TGetIngredientsResponse = TServerResponse<{
    data: TIngredientData[]
}>

export type TRefreshResponse = TServerResponse<{
    refreshToken: string,
    accessToken: string,
}>

export type TPostLoginResponse = TRefreshResponse & { user: TUser }
export type TPostRegisterResponse = TRefreshResponse & { user: TUser }

export type TUser = {
    email: string,
    name: string,
}

export type TUserResponse = TServerResponse<{user: TUser}>

export type TPatchUser = TServerResponse<{user: TUser}>

export type TForgotPasswordDataRequest = TServerResponse<TForgotPasswordData>
export type TOrderData = {ingredients: string[]}

export type TOrderDataSuccessRequest = TServerResponse<{
    order: {
        number: number
    },
    name: string,
}>

export type TResetPasswordDataRequest = {
    password: string,
    token: string,
}

export type TResetPasswordResponse = TServerResponse<{ message: string, }>
export type TLogoutResponse = TServerResponse<{message: string}>

export type TOrder = {
    _id: string;
    ingredients: string[];
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
};

export type TGetOrderResponse = TServerResponse<{orders: [TOrder] }>

export type TOrders = TOrder[];

export type TGetOrdersResponse = TServerResponse<{
    orders: TOrders;
    total: number;
    totalToday: number;
}>
export type TActiveOrder = Omit<TOrder, 'ingredients'> & { ingredients: TIngredientCardData[]}

export type TDoneInProgressOrders = {
    done: number[];
    inProgress: number[];
};
