import style from '../ingredient-details/ingredient-details.module.css'
import {useSelector} from "react-redux";

export default function IngredientDetails() {
  const { selectedIngredient } = useSelector(state => state.ingredientDetails)
  const {image_large, name, calories, proteins, fat, carbohydrates} = selectedIngredient
  return (
    <div className={`${style.detailsWrapper}`}>
      <img src={image_large} alt={name} className={`mb-4`}/>
      <span className={`text text_type_main-medium mb-8`}>{name}</span>
      <div className={`mb-5`} >
        <div>
          <span className={`text text_type_main-default text_color_inactive`}>Калории,ккал</span>
          <div className={`text text_type_digits-default text_color_inactive`}>{calories}</div>
        </div>
        <div>
          <span className={`text text_type_main-default text_color_inactive`}>Белки, г</span>
          <div className={`text text_type_digits-default text_color_inactive`}>{proteins}</div>
        </div>
        <div>
          <span className={`text text_type_main-default text_color_inactive`}>Жиры, г</span>
          <div className={`text text_type_digits-default text_color_inactive`}>{fat}</div>
        </div>
        <div>
          <span className={`text text_type_main-default text_color_inactive`}>Углеводы, г</span>
          <div className={`text text_type_digits-default text_color_inactive`}>{carbohydrates}</div>
        </div>
      </div>
    </div>
  )
}
