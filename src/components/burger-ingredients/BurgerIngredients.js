import {Tabs} from './Tab'
import React from "react";
import style from '../burger-ingredients/burgerIngredients.module.css'
import ProductList from "../product-list/product-list";
import {data} from "../../utils/data";

export default function BurgerIngredients() {


  return(
    <section className={``}>
      <span className={`text text_type_main-large pb-5`}> Соберите бургер</span>
      <Tabs />
      <div className={`${style.containerIngredients}`}>
        <span className={`text text_type_main-medium`}>Булки</span>
        <div className={`${style.wrapperCard} pt-6 pb-10 pl-4`}>
          <ProductList />
          <ProductList />
        </div>
        <span className={`text text_type_main-medium`}>Соусы</span>
        <div className={`${style.wrapperCard} pt-6 pb-10 pl-4`}>
          <ProductList />
          <ProductList />
        </div>
        <span className={`text text_type_main-medium`}>Начинки</span>
        <div className={`${style.wrapperCard} pt-6 pb-10 pl-4`}>
          <ProductList />
          <ProductList />
        </div>
      </div>
    </section>
  )
}
