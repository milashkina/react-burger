import style from '../ingredient-details/ingredient-details.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getIngredients} from "../../services/reducers/burger-ingredients";

export default function IngredientDetails() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, []); // eslint-disable-line

  const {ingredients, isSuccess} = useSelector(state => state.burgerIngredients)
  const { id } = useParams()
  let selectedIngredient = {}
  if (isSuccess) {
    selectedIngredient = ingredients.filter((ingredient) => ingredient._id === id)[0]
  }
  const {image_large, name, calories, proteins, fat, carbohydrates} = selectedIngredient ?? {}

  return (
    <div className={`${style.detailsWrapper}`}>
      {selectedIngredient ? (
        <>
          <img src={image_large} alt={name} className={`mb-4`}/>
          <span className={`text text_type_main-medium mb-8`}>{name}</span>
          <div className={`mb-5`}>
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
        </>
      ) : (
        <span className={`text text_type_main-large`}>Loading...</span>
      )}
  </div>
  )
}
