import React from 'react';
import style from '../App/app.module.css'
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import {data} from "../../utils/data"

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className={`${style.flexContainer} + pt-10`}>
        <BurgerIngredients />
        <BurgerConstructor data={data}/>
      </main>
    </div>
  );
}

export default App;
