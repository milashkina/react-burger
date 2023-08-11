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
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates:PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }).isRequired
}
