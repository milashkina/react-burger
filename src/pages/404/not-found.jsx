import UFOObj from '../../images/UFO404.svg'
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../utils/constant";
import style from './not-found.module.css'
export function NotFound404Page() {
  const navigate = useNavigate()
  const onClickHome = () => {
    navigate(PATH.HOME)
  }
  return (
    <section className={`${style.notFoundLayout}`}>
      <img loading={"lazy"} src={UFOObj} alt={'UFO object'}/>
      <div>
        <span className={`text text_type_main-medium`}>sorry, you are broken our APP :(</span>
        <Button type={'primary'} size={'medium'}  htmlType={"button"} onClick={onClickHome}>вернуться на главную</Button>
      </div>
    </section>
  )
}
