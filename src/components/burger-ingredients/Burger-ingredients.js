import {Tabs} from './Tab'
import React, {useMemo} from "react";
import style from './burger-ingredients.module.css'
import ProductList from "../product-list/product-list";
import PropTypes from "prop-types";



export default function BurgerIngredients({data}) {

  console.log(data)
  const bun = 'bun';
  const main = 'main';
  const sauce = 'sauce';
  const bunArr = useMemo(() => {
    return data?.filter(elem => elem?.type === bun)
  }, [data])
  const mainArr = useMemo(() => {
    return data?.filter(elem => elem.type === main)
  }, [data])
  const sauceArr = useMemo(() => {
    return data?.filter(elem => elem.type === sauce)
  }, [data])

  return(
    <section className={``}>
      <span className={`text text_type_main-large pb-5`}> Соберите бургер</span>
        <Tabs />
        <div className={`${style.productList}`}>
          <h2 className={`text text_type_main-medium`}>Булки</h2>
          <ProductList data={bunArr}/>
          <h2 className={`text text_type_main-medium`}>Соусы</h2>
          <ProductList data={sauceArr}/>
          <h2 className={`text text_type_main-medium`}>Начинки</h2>
          <ProductList data={mainArr}/>
        </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
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
