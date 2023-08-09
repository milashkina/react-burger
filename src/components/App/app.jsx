import React, {useEffect, useState} from 'react';
import style from '../App/app.module.css'
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/Burger-ingredients";
import BurgerConstructor from "../burger-constructor/Burger-constructor";

function App() {
  const fetchApiIngredients = 'https://norma.nomoreparties.space/api/ingredients';

  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = () => {
      fetch(fetchApiIngredients)
        .then(response => response.json())
        .then((data) => {
          if (data.success) {
            setData(data)
          }
        })
        .catch(err => console.log(err))
    }
    fetchData()
  }, []);


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
