import React from "react";
import style from "../burger-ingredients/burger-ingredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";
import {INGREDIENTS_TITLES} from "../../utils/constant";
import PropTypes from "prop-types";

export default function Tabs ({onClick}) {
  // TODO: переделать работу с табами на useState. Часто дергаем стайт редакса + нет необходимости хранить информацию в общем стейте аппа
  const current = useSelector(state => state.burgerIngredients.elem)
  return(
    <div className={`${style.flex} + pb-10`}>
      <Tab
        value={INGREDIENTS_TITLES.BUN}
        active={current === INGREDIENTS_TITLES.BUN}
        onClick={(e) => onClick(e)}>
        {INGREDIENTS_TITLES.BUN}
      </Tab>
      <Tab value={INGREDIENTS_TITLES.SAUCE}
           active={current === INGREDIENTS_TITLES.SAUCE}
           onClick={(e) => onClick(e)}>
        {INGREDIENTS_TITLES.SAUCE}
      </Tab>
      <Tab value={INGREDIENTS_TITLES.MAIN}
           active={current === INGREDIENTS_TITLES.MAIN}
           onClick={(e) => onClick(e)}>
        {INGREDIENTS_TITLES.MAIN}
      </Tab>
    </div>
  )
}
Tabs.propTypes = {
  onClick: PropTypes.func.isRequired,
};
