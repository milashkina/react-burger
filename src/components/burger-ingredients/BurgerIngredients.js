import {Tabs} from './Tab'
import React from "react";
import style from '../burger-ingredients/burgerIngredients.module.css'
import ProductList from "../product-list/product-list";
import {data} from "../../utils/data";

export default function BurgerIngredients() {

  const bun = data?.filter(elem => elem.type === 'bun')
  const main = data?.filter(elem => elem.type === 'main')
  const sauce = data?.filter(elem => elem.type === 'sauce')

  return(
    <section className={``}>
      <span className={`text text_type_main-large pb-5`}> Соберите бургер</span>
        <Tabs />
        <div className={`${style.productList}`}>
          <span className={`text text_type_main-medium`}>Булки</span>
          <ProductList data={bun} />
          <span className={`text text_type_main-medium`}>Соусы</span>
          <ProductList data={sauce} />
          <span className={`text text_type_main-medium`}>Начинки</span>
          <ProductList data={main} />
        </div>
    </section>
  )
}
