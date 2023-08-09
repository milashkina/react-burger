import {Tabs} from './Tab'
import React, {useMemo} from "react";
import style from './burger-ingredients.module.css'
import ProductList from "../product-list/product-list";
import PropTypes from "prop-types";



export default function BurgerIngredients({data}) {
  const bun = useMemo(() => {
    return data?.filter(elem => elem?.type === 'bun')
  }, [data])
  const main = useMemo(() => {
    return data?.filter(elem => elem.type === 'main')
  }, [data])
  const sauce = useMemo(() => {
    return data?.filter(elem => elem.type === 'sauce')
  }, [data])

  return(
    <section className={``}>
      <span className={`text text_type_main-large pb-5`}> Соберите бургер</span>
        <Tabs />
        <div className={`${style.productList}`}>
          <h2 className={`text text_type_main-medium`}>Булки</h2>
          <ProductList data={bun}/>
          <h2 className={`text text_type_main-medium`}>Соусы</h2>
          <ProductList data={sauce}/>
          <h2 className={`text text_type_main-medium`}>Начинки</h2>
          <ProductList data={main}/>
        </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf,
}
