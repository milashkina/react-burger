import style from '../ingredient-details/ingredient-details.module.css'
import {useDispatch, useSelector} from "../../services/hook";
import {useParams} from "react-router-dom";
import {FC, useEffect} from "react";
import {TIngredientCardData} from "../../types/types";
import {getIngredientsThunk} from "../../services/actions/burger-ingredients";


export const IngredientDetails: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredientsThunk())
  }, []); // eslint-disable-line

  const {ingredients, isSuccess} = useSelector(state => state.burgerIngredients)
  const { id } = useParams<{ id?: string }>()
  const selectedIngredient = (isSuccess && Array.isArray(ingredients) && ingredients.filter((ingredient: TIngredientCardData) => ingredient._id === id)[0]) || null
  const {image_large, name, calories, proteins, fat, carbohydrates} = selectedIngredient ?? {}

  return (
    <div className={`${style.detailsWrapper}`}>
      {isSuccess ? (
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
