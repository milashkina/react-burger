import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import {DND_TYPES, INGREDIENT_PROP_TYPES} from "../../utils/constant";
import {useDrag} from "react-dnd";
import style from '../app/app.module.css'
export function IngredientCard({ingredient, onSelect}) {
  const {image, name, price, quantity} = ingredient
  const [ { isDragging },dragRef] = useDrag({
    type: DND_TYPES.ADD_INGREDIENT,
    item: ingredient,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return(
    <div ref={dragRef} onClick={() => onSelect(ingredient)} className={isDragging ? `${style.borderAccent}` : ''} >
      {!!quantity && <Counter count={quantity} size="default" extraClass="m-1"/>}
      <img src={image} alt={name} className={`p-4`} />
      <div className={` pt-1 pb-1 `}>
        <span className={`text text_type_digits-default`}>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <span className={`text text_type_main-default`}>{name}</span>
    </div>
  )
}

IngredientCard.propTypes = {
  ingredient: INGREDIENT_PROP_TYPES,
  onSelect: PropTypes.func.isRequired
}

