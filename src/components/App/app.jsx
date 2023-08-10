import React, { useEffect, useState} from 'react';
import style from '../App/app.module.css'
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/Burger-ingredients";
import BurgerConstructor from "../burger-constructor/Burger-constructor";
import {UseGetIngredients} from "../../utils/useGetIngredients";

function App() {
  const [data, setData] = useState({
    success: false,
    data: [],
  })
  const [hasError, setHasError] = useState('')

  useEffect(() => {
    getIngredients()
  }, []);

  function getIngredients() {
    UseGetIngredients()
      .then(json => setData({data: json.data, success: true}))
      .catch(err => {
        setHasError(err)
        console.log(hasError)
      })
  }

  return (
    <div className="App">
      <AppHeader />
      <main className={`${style.flexContainer} + pt-10`}>
        {data && <BurgerIngredients data={data.data}/>}
        <BurgerConstructor/>
      </main>
    </div>
  );
}

export default App;
