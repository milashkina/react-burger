import React from 'react';
import style from '../App/app.module.css'
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className={`${style.flexContainer} + pt-10`}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </div>
  );
}

export default App;
