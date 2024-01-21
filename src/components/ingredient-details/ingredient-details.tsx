import style from '../ingredient-details/ingredient-details.module.css'
import {useSelector} from "../../services/hook";
import {useParams} from "react-router-dom";
import {FC} from "react";
import {TIngredientCardData} from "../../types/types";


export const IngredientDetails: FC = () => {
  const {ingredients, isSuccess} = useSelector(state => state.burgerIngredients)
  const { id } = useParams<{ id?: string }>()
  const selectedIngredient = (isSuccess && Array.isArray(ingredients) && ingredients.filter((ingredient: TIngredientCardData) => ingredient._id === id)[0]) || null
  const {image_large, name, calories, proteins, fat, carbohydrates} = selectedIngredient ?? {}

  return (
    <div className={`${style.detailsWrapper}`} >
      {isSuccess ? (
        <>
          <img src={image_large} alt={name} className={`mb-4`} data-testId={'details-image'} data-test={`${isSuccess}-image`}/>
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
        <span className={`text text_type_main-large`} data-test={'loader_details_section'}>Loading...</span>
      )}
  </div>
  )
}
