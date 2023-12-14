import {
    DECREASE_COUNT,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    INCREASE_COUNT,
    REVERSE_BUN
} from "../constants/burger-ingredients";
import {TBun, TIngredientCardData} from "../../types/types";
import {AppThunkAction} from "../../types";
import {getIngredients} from "../../utils/queries/getIngredients";

export interface IGetIngredientsRequest {
    readonly type: typeof GET_INGREDIENTS_REQUEST
}
export interface  IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS,
    readonly ingredients: TIngredientCardData[]
}
export interface  IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED
}
export interface  IReverseBun {
    readonly type: typeof REVERSE_BUN,
    readonly bun: TBun,
    readonly _id: string,
}
export interface  IIncreaseCount {
    readonly type: typeof INCREASE_COUNT,
    readonly ingredient: TIngredientCardData,
    readonly _id: string,
}
export interface  IDecreaseCount {
    readonly type: typeof DECREASE_COUNT,
    readonly ingredient: TIngredientCardData,
    readonly _id: string,
}

export type TIngredientsAction =
    IDecreaseCount | IIncreaseCount |
    IReverseBun |
    IGetIngredientsFailed | IGetIngredientsSuccess | IGetIngredientsRequest

//generation actions
export const getIngredientsRequest = (): IGetIngredientsRequest => ({
    type: GET_INGREDIENTS_REQUEST
})
export const getIngredientsRequestFailed = (): IGetIngredientsFailed => ({
    type: GET_INGREDIENTS_FAILED
})
export const getIngredientRequestSuccess = (ingredients: TIngredientCardData[]): IGetIngredientsSuccess => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients
})
export const reverseBun = (bun: TBun, _id: string): IReverseBun => ({
    type: REVERSE_BUN,
    bun,
    _id
})
export const increaseCount = (ingredient: TIngredientCardData, _id: string): IIncreaseCount => ({
    type: INCREASE_COUNT,
    ingredient,
    _id
})
export const decreaseCount = (ingredient: TIngredientCardData, _id: string): IDecreaseCount => ({
    type: DECREASE_COUNT,
    ingredient,
    _id
})


export const  getIngredientsThunk = (): AppThunkAction<Promise<unknown>> => async (dispatch) => {
    dispatch(getIngredientsRequest());
    try {
        const res = await getIngredients();
        const ingredients = res.data.map((ingredient) => ({...ingredient, quantity: 0}));
        dispatch(getIngredientRequestSuccess(ingredients));
    } catch {
        dispatch(getIngredientsRequestFailed());
    }
}
