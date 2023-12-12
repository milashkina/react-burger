import {TActiveOrder, TIngredientCardData, TOrders} from "../../types/types";
import {getIngredients} from "./getIngredientsOrder";

export const getOrders = (orders: TOrders, data: TIngredientCardData[]) => {
    const activeOrders: TActiveOrder[] = []
    orders.forEach((order) => {
        const {ingredients, ...state} = order
        const activeOrderIngredients = getIngredients(order.ingredients, data)
        if (activeOrderIngredients.length) {
            activeOrders.push({...state, ingredients: activeOrderIngredients})
        }
    })
    return activeOrders
}
