import style from '../product-list/product-list.module.css'
import React from "react";
import PropTypes from "prop-types";
import {IngredientCard} from "../ingredient-card/ingredient-card";
import {INGREDIENT_PROP_TYPES} from "../../utils/constant";


export default function ProductList({ingredients, onSelect}) {

  return(
    <div className={`${style.productWrapper} + pt-6 pb-10 pl-4`}>
      {
        ingredients?.map((elem) =>
        <IngredientCard ingredient={elem} key={elem._id} count={elem.quantity} onSelect={onSelect} />)
      }
    </div>
  )
}

ProductList.propTypes = {
  ingredients: PropTypes.arrayOf(INGREDIENT_PROP_TYPES).isRequired,
  onSelect: PropTypes.func.isRequired
}
