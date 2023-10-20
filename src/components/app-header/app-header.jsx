import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./app-header.module.css"
export default function AppHeader() {

  return(
    <header className={`${style.appHeader} + p-4`}>
      <nav className={`${style.navMenu}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className={`${style.container} + p-4 text text_type_main-default`}>
          <div className={`${style.container} + mr-2`} ><BurgerIcon type="primary" /></div>
          <span className={`text text_type_main-default text_color_primary`}>Конструктор</span>
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className={`${style.container} + p-2 text text_type_main-default text_color_inactive`}>
          <div className={`${style.container} + mr-2`} ><ListIcon type="secondary" /></div>
          Лента заказов
        </a>
      </nav>
      <div>
        <Logo />
      </div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className={`${style.container} + p-2 text text_type_main-default text_color_inactive`}>
        <div className={`${style.container} + mr-2`} ><ProfileIcon type="secondary" /></div>
        Личный кабинет
      </a>
    </header>
  )
}
