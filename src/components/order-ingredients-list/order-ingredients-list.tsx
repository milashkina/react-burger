import {FC} from "react";
import style from "../order-card/order-card.module.css";
import {nanoid} from "nanoid/non-secure";
import {OrderIngredientPreview} from "../order-ingredient-preview/order-ingredient-preview";
import {TIngredientCardData} from "../../types/types";


export type TOrderIngredientsList = {
    ingredients: TIngredientCardData[],
}

export const OrderIngredientsList: FC<TOrderIngredientsList> = ({ingredients}): JSX.Element => {

    return (
        <div className={`${style.allIngredientLayout} pr-6`}>
        {ingredients && ingredients.map((element: TIngredientCardData) => <OrderIngredientPreview ingredient={element} key={nanoid()}/>
        )}
        </div>
    )
}
