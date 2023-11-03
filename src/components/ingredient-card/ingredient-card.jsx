import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import {DND_TYPES, INGREDIENT_PROP_TYPES} from "../../utils/constant";
import {useDrag} from "react-dnd";
import globalStyle from '../app/app.module.css'
import {Link, useLocation} from "react-router-dom";

export function IngredientCard({ingredient, onSelect}) {
  const location = useLocation()
  const {image, name, price, quantity, _id} = ingredient
  const [ { isDragging },dragRef] = useDrag({
    type: DND_TYPES.ADD_INGREDIENT,
    item: ingredient,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return(
    <Link
      to={{ pathname: `ingredients/${_id}` }}
      state={{ backgroundLocation: location }}
      ref={dragRef}
      onClick={() => onSelect(ingredient)}
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

IngredientCard.propTypes = {
  ingredient: INGREDIENT_PROP_TYPES,
  onSelect: PropTypes.func.isRequired
}

