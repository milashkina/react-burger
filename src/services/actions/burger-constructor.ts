import {ADD_INGREDIENT, CHANGE_BUN, DELETE_INGREDIENT, SORT_CARD} from "../constants/burger-constructor";
import {TBun, TIngredientCardData, TIngredientData} from "../../types/types";

export interface IChangeBun {
    readonly type: typeof CHANGE_BUN,
    readonly bun: TBun
}
export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT,
    readonly ingredient: TIngredientCardData
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
export type TConstructorAction =
    IDeleteIngredient | ISortCard |
    IAddIngredient | IChangeBun

export const changeBun = (bun: TBun): IChangeBun => ({
    type: CHANGE_BUN,
    bun
})
export const addIngredient = (ingredient: TIngredientCardData): IAddIngredient => ({
    type: ADD_INGREDIENT,
    ingredient
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
