import style from '../product-list/product-list.module.css'
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {IngredientCard} from "../ingredient-card/ingredient-card";
import {useDispatch} from "react-redux";
import {DEFAULT_BUN} from "../../services/actions/burger-constructor";


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

// eslint-disable-next-line react/no-typos
ProductList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(
  {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates:PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }
)).isRequired,
  onSelect: PropTypes.func.isRequired
}
