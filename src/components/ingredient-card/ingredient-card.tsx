import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC} from "react";
import {DND_TYPES} from "../../utils/constant";
import {useDrag} from "react-dnd";
import globalStyle from '../app/app.module.css'
import {Link, useLocation} from "react-router-dom";
import {TIngredientCardData} from "../../types/types";

interface IIngredientCard {
    ingredient: TIngredientCardData,
    onSelect: (ingredient: TIngredientCardData) => void,
}
export const IngredientCard: FC<IIngredientCard> = ({ingredient, onSelect }): JSX.Element => {
  const location = useLocation()
  const {image, name, price, _id, quantity} = ingredient
  const [ { isDragging },dragRef] = useDrag({
    type: DND_TYPES.ADD_INGREDIENT,
    item: ingredient,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return(
    <Link
      to={{ pathname: `ingredients/${_id}` }}
      state={{ backgroundLocation: location }}
      ref={dragRef}
      onClick={() => onSelect(ingredient)}
      data-test={`${ingredient._id}`}
      className={isDragging ? `${globalStyle.colorAccent} ${globalStyle.IngredientCardLayout}` : `${globalStyle.IngredientCardLayout} text_color_primary` } >
      {!!quantity && <Counter count={quantity} size="default" extraClass="m-1"/>}
      <img src={image} alt={name} className={`p-4`} />
      <div className={` pt-1 pb-1 `}>
        <span className={`text text_type_digits-default`}>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <span className={`text text_type_main-default`}>{name}</span>
    </Link>
  )
}


