import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../product-list/product-list.module.css'
import {Modal} from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import React, {useState} from "react";
import PropTypes from "prop-types";

export default function ProductList({data}) {
  const [isHidden, setHidden] = useState(true)
  const [selectIngredient, setSelectIngredient] = useState({})
  const handleOpen = (elem) => {
    setHidden(false)
    setSelectIngredient(elem)
  }
  const handleClose = () => {
    setHidden(true)
  }


  return(
    <div className={`${style.productWrapper} + pt-6 pb-10 pl-4`}>
      {data?.map((elem,index) =>
        <div key={index} onClick={() => handleOpen(elem)} >
          <Counter count={1} size="default" extraClass="m-1" />
          <img src={elem.image} alt={elem.name} className={`p-4`} />
          <div className={` pt-1 pb-1 `}>
            <span className={`text text_type_digits-default`}>{elem.price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <span className={`text text_type_main-default`}>{elem.name}</span>
        </div>
      )
      }
      {!isHidden &&
        <Modal onClose={handleClose} header="Детали ингредиента">
          <IngredientDetails data={selectIngredient}/>
        </Modal>}
    </div>
  )
}

// eslint-disable-next-line react/no-typos
ProductList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
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
)).isRequired
}
