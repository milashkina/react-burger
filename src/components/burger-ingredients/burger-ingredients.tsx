import { Tabs } from '../tab-ingredients/tab-ingredients'
import React, {FC, SyntheticEvent, useEffect, useMemo, useState} from "react";
import style from './burger-ingredients.module.css'
import { ProductList } from "../product-list/product-list";
import {useDispatch, useSelector} from "../../services/hook";
import {selectIngredient} from '../../services/reducers/details'
import {INGREDIENT_TYPE, INGREDIENTS_TITLES} from "../../utils/constant";
import {TIngredientCardData} from "../../types/types";
import {openIngredientDetailsModal} from "../../services/actions/details";
export const BurgerIngredients: FC = () => {

  const dispatch = useDispatch()
  const {ingredients} = useSelector((state) => state.burgerIngredients) ?? [];

  useEffect(() => {
    localStorage.setItem('current', INGREDIENTS_TITLES.BUN)
  },[]);

  const bunArr = React.useMemo(() =>
    ingredients.filter((elem) => elem.type === INGREDIENT_TYPE.BUN), [ingredients]);
  const mainArr = useMemo(() =>
    ingredients.filter((elem) => elem.type === INGREDIENT_TYPE.MAIN), [ingredients])
  const sauceArr = useMemo(() =>
    ingredients.filter((elem) => elem.type === INGREDIENT_TYPE.SAUCE), [ingredients])

  const bunRef = React.useRef<any>(null);
  const sauceRef = React.useRef<any>(null);
  const mainRef = React.useRef<any>(null);

  const [activeTab, setActiveTab] = useState(bunRef)
  function handleIngredientCardClick(ingredient: TIngredientCardData): void {
    dispatch(
      selectIngredient(ingredient)
    )
    dispatch(openIngredientDetailsModal())
  }

  const currentTab = (current: any): void => {
    setActiveTab(current)
    localStorage.setItem('current', current.current.innerHTML)
  }

  function handleTabClick(activeTab: string) {
    switch (activeTab) {
      case INGREDIENTS_TITLES.BUN:
        if (bunRef && bunRef.current) {
          currentTab(bunRef)
          bunRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        break;
      case INGREDIENTS_TITLES.SAUCE:
        if (sauceRef && sauceRef.current) {
          currentTab(sauceRef)
          sauceRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        break;
      case INGREDIENTS_TITLES.MAIN:
        if (mainRef && mainRef.current) {
          currentTab(mainRef)
          mainRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        break;
      default:
        break;
    }
  }

  function handleScroll(e: SyntheticEvent) {
    const target = e.target as HTMLDivElement
    const scrollTop = target.scrollTop;
    if (sauceRef && sauceRef.current && bunRef && bunRef.current && mainRef && mainRef.current && activeTab) {
      const sauceScrollTop = sauceRef.current.getBoundingClientRect().top;
      const mainScrollTop = mainRef.current.getBoundingClientRect().top;
      if (scrollTop >= mainScrollTop) {
        currentTab(mainRef)
      } else if (sauceScrollTop >= scrollTop) {
        currentTab(bunRef)
      } else {
        currentTab(sauceRef)
      }
    }
  }

  return (
    <section className={``}>
      <span className={`text text_type_main-large pb-5`}> Соберите бургер</span>
      <Tabs onClick={handleTabClick}/>
      {ingredients.length === 0 ? (
        <span className={`text text_type_main-large`}>Loading...</span>
      ) : (
        <div className={`${style.productList}`} onScroll={handleScroll}>
          <h2 className={`text text_type_main-medium`} ref={bunRef}>{INGREDIENTS_TITLES.BUN}</h2>
          <ProductList ingredients={bunArr} onSelect={handleIngredientCardClick}/>
          <h2 className={`text text_type_main-medium`} ref={sauceRef}>{INGREDIENTS_TITLES.SAUCE}</h2>
          <ProductList ingredients={sauceArr} onSelect={handleIngredientCardClick}/>
          <h2 className={`text text_type_main-medium`} ref={mainRef}>{INGREDIENTS_TITLES.MAIN}</h2>
          <ProductList ingredients={mainArr} onSelect={handleIngredientCardClick}/>
        </div>
      )}
    </section>
  )
}
