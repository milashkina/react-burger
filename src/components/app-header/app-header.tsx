import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./app-header.module.css"
import {NavLink} from "react-router-dom";
import {PATH} from "../../utils/constant";
import {FC} from "react";
export const AppHeader: FC = () => {

  return(
    <header className={`${style.appHeader} + p-4`}>
      <nav className={`${style.navMenu}`}>
        <NavLink to={PATH.HOME} className={`${style.container} + p-4 text text_type_main-default`}>
          {({isActive}) => (
            <>
              <div className={`${style.container} + mr-2`} ><BurgerIcon type={isActive ? "primary" : "secondary"} /></div>
              <span className={`text text_type_main-default ${isActive ? 'text_color_primary' : 'text_color_inactive'}`}>Конструктор</span>
            </>
          )}
        </NavLink>
        <NavLink to={PATH.FEED} className={`${style.container} + p-2 text text_type_main-default text_color_inactive`}>
            {({isActive}) => (
                <>
                    <div className={`${style.container} + mr-2`} ><ListIcon type={isActive ? "primary" : "secondary"} /></div>
                    <span className={`text text_type_main-default ${isActive ? 'text_color_primary' : 'text_color_inactive'}`}>Лента заказов</span>
                </>
            )}
        </NavLink>
      </nav>
      <NavLink to={PATH.HOME}>
          <Logo/>
      </NavLink>
      <NavLink to={PATH.PROFILE} className={`${style.container} + p-4 text text_type_main-default`}>
        {({isActive}) => (
          <div className={`${style.container}`}>
            <div className={`${style.container} + mr-2`} ><ProfileIcon type={isActive ? "primary" : "secondary"} /></div>
            <span className={`text text_type_main-default ${isActive ? 'text_color_primary' : 'text_color_inactive'}`}>Личный кабинет</span>
          </div>
        )}
      </NavLink>
    </header>
  )
}
