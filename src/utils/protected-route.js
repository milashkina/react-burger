import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import {PATH} from "./constant";
import PropTypes from "prop-types";


export const ProtectedRouteElement = ({onlyUnAuth = false, element}) => {
  const isAuth = useSelector(state => state.access.isAuth)
  const location = useLocation()

  // защита роутов LOGIN REGISTER FORGOT_PASSWORD RESET_PASSWORD от зареганных пользователей
  if (onlyUnAuth && isAuth) {
    const { from } = location.state || { from : { pathname: PATH.HOME}}
    return <Navigate to={from} />
  }

 // защита PROFILE от незареганных пользователей
  if (!onlyUnAuth && !isAuth) {
    return <Navigate to={PATH.LOGIN} state={{from: location}} />
  }

  return  element
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired
}
