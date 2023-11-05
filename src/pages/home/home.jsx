import globalStyle from "../../components/app/app.module.css";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import React from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

export function HomePage() {

  return(
    <>
      <DndProvider backend={HTML5Backend}>
        <main className={`${globalStyle.flexContainer} + pt-10`}>
          <BurgerIngredients />
          <BurgerConstructor/>
        </main>
      </DndProvider>
    </>
  )
}
