import {TIngredientCardData} from "../../types/types";

export const getIngredients = (ids: string[], data: TIngredientCardData[]) => {
    const result: TIngredientCardData[] = [];

    const ingredients = new Map<string, number>();
    const buns = new Set();

    ids.forEach((id: string): void => {
        const count = ingredients.get(id);
        if (count) {
            ingredients.set(id, count + 1);
        } else {
            ingredients.set(id, 1);
        }
    });

    if (data.length) {
        for (let [id, count] of ingredients) {
            data.forEach((ingredient: TIngredientCardData): void => {
                if (ingredient._id === id) {
                    if (ingredient.type === 'bun') {
                        buns.add(id);
                        count = 2;
                    }
                    result.push({ ...ingredient, quantity: count });
                }
            });
        }
    }
    if (buns.size === 1) {
        return result;
    }
    return [];
};
