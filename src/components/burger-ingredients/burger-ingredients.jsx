import Tabs from '../tab-ingredients/tab-ingredients'
import React, {useMemo} from "react";
import style from './burger-ingredients.module.css'
import ProductList from "../product-list/product-list";
import {useDispatch, useSelector} from "react-redux";
import {OPEN_INGREDIENT_DETAILS_MODAL} from "../../services/actions/details";
import {selectIngredient} from '../../services/reducers/details'
import {INGREDIENT_TYPE, INGREDIENTS_TITLES} from "../../utils/constant";
import {CHANGE_TAB} from "../../services/actions/burger-ingredients";
export default function BurgerIngredients() {

  const dispatch = useDispatch()
  const {ingredients} = useSelector(state => state.burgerIngredients);

  const bunArr = React.useMemo(() =>
    ingredients.filter((elem) => elem.type === INGREDIENT_TYPE.BUN), [ingredients]);
  const mainArr = useMemo(() =>
    ingredients.filter(elem => elem.type === INGREDIENT_TYPE.MAIN), [ingredients])
  const sauceArr = useMemo(() =>
    ingredients.filter(elem => elem.type === INGREDIENT_TYPE.SAUCE), [ingredients])

  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  function handleIngredientCardClick(ingredient) {
    dispatch(
      selectIngredient(ingredient)
    )
    dispatch({
      type: OPEN_INGREDIENT_DETAILS_MODAL,
    })
  }

  function handleTabClick(elem) {
    dispatch({
      type: CHANGE_TAB,
      elem,
    })
    switch (elem) {
      case INGREDIENTS_TITLES.BUN:
        bunRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      case INGREDIENTS_TITLES.SAUCE:
        sauceRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      case INGREDIENTS_TITLES.MAIN:
        mainRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        break;
      default:
        break;
    }
  }

  function handleScroll(e) {
    const scrollTop = e.target.scrollTop;
    const sauceScrollTop = sauceRef.current.getBoundingClientRect().top;
    const mainScrollTop = mainRef.current.getBoundingClientRect().top;
    if (scrollTop >= mainScrollTop) {
      dispatch({
        type: CHANGE_TAB,
        elem: INGREDIENTS_TITLES.MAIN,
      });
    } else if (sauceScrollTop >= scrollTop) {
      dispatch({
        type: CHANGE_TAB,
        elem: INGREDIENTS_TITLES.BUN,
      });
    } else {
      dispatch({
        type: CHANGE_TAB,
        elem: INGREDIENTS_TITLES.SAUCE,
      });
    }
  }

  return (
    <section className={``}>
      <span className={`text text_type_main-large pb-5`}> Соберите бургер</span>
      <Tabs onClick={handleTabClick}/>
      <div className={`${style.productList}`} onScroll={handleScroll}>
        <h2 className={`text text_type_main-medium`} ref={bunRef}>{INGREDIENTS_TITLES.BUN}</h2>
        <ProductList ingredients={bunArr} onSelect={handleIngredientCardClick}/>
        <h2 className={`text text_type_main-medium`} ref={sauceRef}>{INGREDIENTS_TITLES.SAUCE}</h2>
        <ProductList ingredients={sauceArr} onSelect={handleIngredientCardClick}/>
        <h2 className={`text text_type_main-medium`} ref={mainRef}>{INGREDIENTS_TITLES.MAIN}</h2>
        <ProductList ingredients={mainArr} onSelect={handleIngredientCardClick}/>
      </div>
    </section>
  )
}
