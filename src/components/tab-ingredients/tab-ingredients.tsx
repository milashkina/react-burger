import React, {FC} from "react";
import style from "../burger-ingredients/burger-ingredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {INGREDIENTS_TITLES} from "../../utils/constant";


interface ITabs {
    onClick: (value: string) => void
}
export const Tabs: FC<ITabs> = ({onClick}): JSX.Element => {
  const current = localStorage.getItem('current')
  return(
    <div className={`${style.flex} + pb-10`}>
      <Tab value={INGREDIENTS_TITLES.BUN}
           active={current === INGREDIENTS_TITLES.BUN}
           onClick={onClick}>
           {INGREDIENTS_TITLES.BUN}
      </Tab>
      <Tab value={INGREDIENTS_TITLES.SAUCE}
           active={current === INGREDIENTS_TITLES.SAUCE}
           onClick={onClick}>
          {INGREDIENTS_TITLES.SAUCE}
      </Tab>
      <Tab value={INGREDIENTS_TITLES.MAIN}
           active={current === INGREDIENTS_TITLES.MAIN}
           onClick={onClick}>
        {INGREDIENTS_TITLES.MAIN}
      </Tab>
    </div>
  )
}
