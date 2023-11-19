import style from "../profile.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../utils/constant";
import React from "react";
import {postLogout} from "../../../services/reducers/access";
import {useDispatch} from "react-redux";


export const ProfileNav = () => {

  const dispatch = useDispatch()
  const logOut = () => {
    dispatch<any>(postLogout())
  }

  return (
    <nav className={`${style.navLayout}`}>
      <NavLink to={PATH.PROFILE} end className={`text text_type_main-medium p-3`}>
        {({isActive}) => (
          <span className={`text text_type_main-medium  ${isActive ? 'text_color_primary' : 'text_color_inactive'}`}>Профиль</span>
        )}
      </NavLink>
      <NavLink to={PATH.PROFILE_ORDERS} className={`text text_type_main-medium`}>
        {({isActive}) => (
          <span className={`text text_type_main-medium ${isActive ? 'text_color_primary' : 'text_color_inactive'} p-3`}>История заказов</span>
        )}
      </NavLink>
      <span className={`${style.navCursorPointer} text text_type_main-medium text_color_inactive p-3`} onClick={() => logOut()}>Выход</span>
    </nav>
  )
}
