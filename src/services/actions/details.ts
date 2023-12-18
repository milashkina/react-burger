import {TIngredientData} from "../../types/types";
import {
    CLOSE_INGREDIENT_DETAILS_MODAL,
    OPEN_INGREDIENT_DETAILS_MODAL,
    SELECT_INGREDIENT,
    UNSELECT_INGREDIENT
} from "../constants/details";

export interface ISelectIngredient {
    readonly type: typeof SELECT_INGREDIENT,
    readonly selectedIngredient: TIngredientData,
}
export interface IUnselectIngredient {
    readonly type: typeof UNSELECT_INGREDIENT,
    readonly selectedIngredient: TIngredientData,
}
export interface IOpenIngredientDetailsModal {
    readonly type: typeof OPEN_INGREDIENT_DETAILS_MODAL,
}
export interface ICloseIngredientDetailsModal {
    readonly type: typeof CLOSE_INGREDIENT_DETAILS_MODAL,
}
export type TDetailsAction = ISelectIngredient | IUnselectIngredient | IOpenIngredientDetailsModal | ICloseIngredientDetailsModal

export const openIngredientDetailsModal = (): IOpenIngredientDetailsModal => ({
    type: OPEN_INGREDIENT_DETAILS_MODAL
})
