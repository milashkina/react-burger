import {FC} from "react";
import style from "../order-card/order-card.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TIngredientCardData} from "../../types/types";

export type TOrderIngredientPreview = {
    ingredient: TIngredientCardData,
}

export const OrderIngredientPreview: FC<TOrderIngredientPreview> = ({ingredient}) => {
    return(
        <>
            {ingredient && (
                <div className={`${style.ingredientsLayout} mb-4`}>
                    <img src={ingredient.image} alt={ingredient.name} title={ingredient.name}/>
                    <span>{ingredient.name}</span>
                    <div className={`${style.currencyLayout}`}>
                        <span>{ingredient.quantity} x {ingredient.price}</span>
                        <CurrencyIcon type={"primary"} />
                    </div>
                </div>
            )}
        </>
    )
}
