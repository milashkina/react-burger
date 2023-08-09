import style from '../ingredient-details/ingredient-details.module.css'
import PropTypes from "prop-types";

export default function IngredientDetails({data}) {
  return (
    <div className={`${style.detailsWrapper}`}>
      <img src={data.image_large} alt={data.name} className={`mb-4`}/>
      <span className={`text text_type_main-medium mb-8`}>{data.name}</span>
      <div className={`mb-5`} >
        <div>
          <span className={`text text_type_main-default text_color_inactive`}>Калории,ккал</span>
          <div className={`text text_type_digits-default text_color_inactive`}>{data.calories}</div>
        </div>
        <div>
          <span className={`text text_type_main-default text_color_inactive`}>Белки, г</span>
          <div className={`text text_type_digits-default text_color_inactive`}>{data.proteins}</div>
        </div>
        <div>
          <span className={`text text_type_main-default text_color_inactive`}>Жиры, г</span>
          <div className={`text text_type_digits-default text_color_inactive`}>{data.fat}</div>
        </div>
        <div>
          <span className={`text text_type_main-default text_color_inactive`}>Углеводы, г</span>
          <div className={`text text_type_digits-default text_color_inactive`}>{data.carbohydrates}</div>
        </div>
      </div>
    </div>
  )
}

IngredientDetails.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates:PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  })
}
