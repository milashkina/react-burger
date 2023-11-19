import style from '../product-list/product-list.module.css'
import React, {FC} from "react";
import {IngredientCard} from "../ingredient-card/ingredient-card";
import {TIngredientCardData} from "../../types/types";


interface IProductList {
  ingredients: TIngredientCardData[],
  onSelect: (ingredients: TIngredientCardData) => void
}

export const ProductList: FC<IProductList> = ({ingredients, onSelect}): JSX.Element => {

  return(
    <div className={`${style.productWrapper} + pt-6 pb-10 pl-4`}>
      {
        ingredients?.map((elem: TIngredientCardData) =>
        <IngredientCard ingredient={elem} key={elem._id} onSelect={onSelect} />)
      }
    </div>
  )
}

