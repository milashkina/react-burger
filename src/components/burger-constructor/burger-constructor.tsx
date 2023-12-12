import style from './burger-constructor.module.css'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC, useState} from "react";
import {Modal} from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "../../services/hook";
import {DropTargetMonitor, useDrop} from "react-dnd";
import {DND_TYPES, PATH} from "../../utils/constant";
import {ConstructorCard} from "../constructor-card/constructor-card";
import {nanoid} from "nanoid/non-secure";
import {postOrderThunk} from "../../services/actions/order-info";
import {useNavigate} from "react-router-dom";
import {TIngredientCardData} from "../../types/types";
import {decreaseCount, increaseCount, reverseBun} from "../../services/actions/burger-ingredients";
import {addIngredient, changeBun, deleteIngredient} from "../../services/actions/burger-constructor";

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.access.isAuth)
  const navigate = useNavigate()
  const { ingredients, bun } = useSelector(state => state.burgerConstructor)
  let total = 0
  if (bun !== null && ingredients.length > 0) {
    ingredients?.map((elem: TIngredientCardData) => total += elem.price)
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
    drop(ingredient: TIngredientCardData) {
      addIngredientInConstructor(ingredient)
    },
    collect: (monitor: DropTargetMonitor) : { isOver: boolean } => ({
      isOver: monitor.isOver()
    })
  })
  function addIngredientInConstructor(ingredient: TIngredientCardData) {
    const {type} = ingredient

    if(type === 'bun') {
      dispatch(reverseBun( ingredient, ingredient._id))
      dispatch(changeBun(ingredient))
    } else if(ingredients.includes(ingredient)) {
      //add previous ingredient in constructor
      dispatch(increaseCount(ingredient, ingredient._id))
    } else {
      //add new ingredient in constructor
      dispatch(addIngredient(ingredient))
      dispatch(increaseCount(ingredient, ingredient._id))
    }
  }
  function deleteIngredientFromConstructor(ingredient: TIngredientCardData) {
      dispatch(decreaseCount(ingredient, ingredient._id))
      dispatch(deleteIngredient(ingredient))

  }
  const handlePostOrder = async () => {
    if (bun !== null) {
      const dataRequest: {ingredients: string[]} = { ingredients: [ bun._id , ...ingredients.map((ingredient: TIngredientCardData) => ingredient._id) , bun._id ]}
      if (isAuth) {
        dispatch(postOrderThunk(dataRequest))
      } else {
        navigate(PATH.LOGIN)
      }
    }

  }

  return (
    <section ref={drop} className={ isOver ? `${style.borderAccent} + pt-15` : 'pt-15'}>
      <section className={`${style.containerConstructor} + pl-8 pb-4`}>
        {bun === null ? (<span className={`${style.startSectionBun} + text text_color_primary`} > Add bun in your burger </span>) :
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
          {(ingredients.length === 0) ?
              (<span className={`${style.startSectionIngredient} + text text_color_primary`}> Add ingredient in your burger </span>)
              :
            ingredients?.map((elem: TIngredientCardData, index: number) =>
            <ConstructorCard
              elem={elem}
              index={index}
              key={nanoid()}
              deleteIngredientFromConstructor={deleteIngredientFromConstructor}/>
          )}
        </div>
      </div>
        <section className={`${style.containerConstructor} + pl-8 mt-4`} >
          {bun === null ? (<span className={`${style.startSectionBun} + text text_color_primary`} > Add bun in your burger </span>) :
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
