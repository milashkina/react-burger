import PropTypes from "prop-types";

export const INGREDIENTS_TITLES = {
  BUN: 'Булки',
  SAUCE: 'Соусы',
  MAIN: 'Начинки',
};
export const INGREDIENT_TYPE  = {
  BUN: 'bun',
  SAUCE: 'sauce',
  MAIN: 'main',
}

export const DND_TYPES = {
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  SORTING_CARD: 'SORTING_CARD',
};

export const API_ORDERS = 'https://norma.nomoreparties.space/api/orders'

export const API_INGREDIENTS = 'https://norma.nomoreparties.space/api/ingredients'
export const INGREDIENT_PROP_TYPES = PropTypes.shape(
  {
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
  }
).isRequired
