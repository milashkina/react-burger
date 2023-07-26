import style from '../burger-constructor/burgerConstructor.module.css'
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import nail1 from "../../images/indredients/illustration_1.png"
import nail2 from "../../images/indredients/illustration_2.png"
import nail3 from "../../images/indredients/illustration_3.png"
import nail4 from "../../images/indredients/illustration_4.png"
import nail5 from "../../images/indredients/illustration_5.png"
export default function BurgerConstructor() {


  return (
    <section className={`pt-15`}>
      <div className={`${style.containerConstructor}`}>
        <div className={`${style.containerConstructor} + pl-8`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={nail4}
          />
        </div>
        <div className={`${style.containerConstructorInside}`}>
          <div className={`${style.wrapperConstructor}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Соус традиционный галактический"
              price={50}
              thumbnail={nail3}
            />
          </div>
          <div className={`${style.wrapperConstructor}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={50}
              thumbnail={nail5}
            />
          </div>
          <div className={`${style.wrapperConstructor}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={50}
              thumbnail={nail1}
            />
          </div>
          <div className={`${style.wrapperConstructor}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={50}
              thumbnail={nail2}
            />
          </div>
          <div className={`${style.wrapperConstructor}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Соус традиционный галактический"
              price={50}
              thumbnail={nail3}
            />
          </div>
          <div className={`${style.wrapperConstructor}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={50}
              thumbnail={nail5}
            />
          </div>
        </div>
        <div className={`${style.containerConstructor} + pl-8`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={nail4}
          />
        </div>
      </div>
      <div className={`${style.containerConstructorFinal} + pt-10 pb-10 pl-4 pr-4`}>
        <div className={`pr-10`}>
          <span className={`pr-2 text text_type_digits-medium`}>610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}
