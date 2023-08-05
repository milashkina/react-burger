import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "../app-header/appHeader.module.css"
export default function AppHeader() {

  return(
    <header className={`${style.appHeader} + p-4`}>
      <nav className={`${style.navMenu}`}>
        <a href="#" className={`${style.container} + p-4 text text_type_main-default text_color_inactive`}>
          <div className={`${style.container} + mr-2`} ><BurgerIcon type="primary" /></div>
          Конструктор
        </a>
        <a href="#" className={`${style.container} + p-2 text text_type_main-default text_color_inactive`}>
          <div className={`${style.container} + mr-2`} ><ListIcon type="secondary" /></div>
          Лента заказов
        </a>
      </nav>
      <div>
        <Logo />
      </div>
      <a href="#" className={`${style.container} + p-2 text text_type_main-default text_color_inactive`}>
        <div className={`${style.container} + mr-2`} ><ProfileIcon type="secondary" /></div>
        Личный кабинет
      </a>
    </header>
  )
}
