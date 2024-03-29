import {
    ADD_INGREDIENT,
    CHANGE_BUN,
    CLEAN_CONSTRUCTOR,
    DELETE_INGREDIENT,
    INCREASE_BUN,
    SORT_CARD
} from "../constants/burger-constructor";
import {TBun, TIngredientCardData} from "../../types/types";
import {nanoid} from "nanoid/non-secure";

export interface IChangeBun {
    readonly type: typeof CHANGE_BUN,
    readonly bun: TBun
}
export interface IIncreaseBun {
    readonly type: typeof INCREASE_BUN,
}
export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT,
    readonly payload: TIngredientCardData,
}
export interface ISortCard {
    readonly type: typeof SORT_CARD,
    readonly dragIndex: number,
    readonly hoverIndex: number
}
export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT,
    readonly ingredient: TIngredientCardData
}
export interface ICleanConstructor {
    readonly type: typeof CLEAN_CONSTRUCTOR
}
export type TConstructorAction =
    IDeleteIngredient | ISortCard |
    IAddIngredient | IChangeBun | IIncreaseBun | ICleanConstructor

export const cleanConstructor = (): ICleanConstructor => ({
    type: CLEAN_CONSTRUCTOR,
})
export const increaseBun = (): IIncreaseBun => ({
    type: INCREASE_BUN,
})
export const changeBun = (bun: TBun): IChangeBun => ({
    type: CHANGE_BUN,
    bun
})
export const addIngredient = (ingredient: TIngredientCardData): IAddIngredient => ({
    type: ADD_INGREDIENT,
    payload: {...ingredient, uniqueId: nanoid()}
})
export const sortCard = (dragIndex: number, hoverIndex: number): ISortCard => ({
    type: SORT_CARD,
    dragIndex,
    hoverIndex
})
export const deleteIngredient = (ingredient: TIngredientCardData): IDeleteIngredient => ({
    type: DELETE_INGREDIENT,
    ingredient
})
