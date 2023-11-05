import style from './burger-constructor.module.css'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {Modal} from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {DND_TYPES, PATH} from "../../utils/constant";
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT, CHANGE_BUN,
} from "../../services/actions/burger-constructor";
import {
  REVERSE_BUN,
  DECREASE_COUNT,
  INCREASE_COUNT,
} from "../../services/actions/burger-ingredients";
import {ConstructorCard} from "../constructor-card/constructor-card";
import {nanoid} from "nanoid/non-secure";
import {postOrder} from "../../services/reducers/order-info";
import {useNavigate} from "react-router-dom";

export default function BurgerConstructor() {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.access.isAuth)
  const navigate = useNavigate()
  const { ingredients, bun } = useSelector(state => state.burgerConstructor)
  let total = 0
  if (bun !== undefined && ingredients.length > 0) {
    ingredients?.map(elem => total += elem.price)
    total +=  bun.price * 2
  } else {
    total = 0
  }
  const [isHidden, setHidden] = useState(true)
  const handleClose = () => {
    setHidden(true)
  }
  const [{ isOver },drop] = useDrop({
    accept: DND_TYPES.ADD_INGREDIENT,
    drop(ingredient) {
      addIngredientInConstructor(ingredient)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })
  function addIngredientInConstructor(ingredient) {
    const {type} = ingredient

    if(type === 'bun') {
      dispatch({
        type: REVERSE_BUN,
        bun: ingredient,
        _id: ingredient._id,
      })
      dispatch({
        type: CHANGE_BUN,
        bun: ingredient
      })
    } else if(ingredients.includes(ingredient)) {
      //add previous ingredient in constructor
      dispatch({
        type: INCREASE_COUNT,
        ingredient: ingredient,
      })
    } else {
      //add new ingredient in constructor
      dispatch({
        type: ADD_INGREDIENT,
        ingredient: ingredient,
      })
      dispatch({
        type: INCREASE_COUNT,
        ingredient: ingredient,
        _id: ingredient._id
      })
    }
  }
  function deleteIngredientFromConstructor(ingredient) {
      dispatch({
        type: DECREASE_COUNT,
        ingredient: ingredient,
        _id: ingredient._id,
      })
      dispatch({
        type: DELETE_INGREDIENT,
        ingredient: ingredient,
        _id: ingredient._id
      })

  }
  const handlePostOrder = async () => {
    const dataRequest = { ingredients: [ bun._id , ...ingredients.map((ingredient) => ingredient._id) , bun._id ]}
    if (isAuth) {
      dispatch(postOrder(dataRequest))
    } else {
      navigate(PATH.LOGIN)
    }
  }

  return (
    <section ref={drop} className={ isOver ? `${style.borderAccent} + pt-15` : 'pt-15'}>
      <section className={`${style.containerConstructor} + pl-8 pb-4`}>
        {Object.keys(bun).length === 0 ? (<span className={`${style.startSectionBun} + text text_color_primary`} > Add bun in your burger </span>) :
          (<ConstructorElement
          type="top"
          isLocked
          text={bun?.name + '(верх)'}
          price={bun?.price}
          thumbnail={bun?.image}
        />)}
      </section>
      <div className={`${style.containerConstructor}`}>
        <div className={`${style.containerConstructorInside}`}>
          {(ingredients.length === 0) ? (<span className={`${style.startSectionIngredient} + text text_color_primary`}> Add ingredient in your burger </span>) :
            ingredients?.map((elem, index) =>
            <ConstructorCard
              elem={elem}
              index={index}
              key={nanoid()}
              deleteIngredientFromConstructor={deleteIngredientFromConstructor}/>
          )}
        </div>
      </div>
        <section className={`${style.containerConstructor} + pl-8 mt-4`} >
          {Object.keys(bun).length === 0 ? (<span className={`${style.startSectionBun} + text text_color_primary`} > Add bun in your burger </span>) :
            <ConstructorElement
            type="bottom"
            isLocked
            text={bun?.name + '(низ)'}
            price={bun?.price}
            thumbnail={bun?.image}
          />}
        </section>
      <div className={`${style.containerConstructorFinal} + pt-10 pb-10 pl-4 pr-4`}>
        <div className={`pr-10`}>
          <span className={`pr-2 text text_type_digits-medium`} >{total}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handlePostOrder}>
          Оформить заказ
        </Button>
      </div>
      {!isHidden &&
        <Modal onClose={handleClose}>
          <OrderDetails />
        </Modal>}
    </section>
    )
}
