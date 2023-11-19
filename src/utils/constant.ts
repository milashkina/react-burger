import PropTypes from "prop-types";
import {TInput, TSize} from "../types/types";

export const INGREDIENTS_TITLES : {
  BUN: string,
  SAUCE: string,
  MAIN: string,
} = {
  BUN: 'Булки',
  SAUCE: 'Соусы',
  MAIN: 'Начинки',
};
export const INGREDIENT_TYPE : {
  BUN: string,
  SAUCE: string,
  MAIN: string,
}  = {
  BUN: 'bun',
  SAUCE: 'sauce',
  MAIN: 'main',
}

export const INPUT: TInput = {
  TYPE: {
    EMAIL: 'email',
    TEXT: 'text',
    PASSWORD: 'password',
  },
  NAME: {
    EMAIL: 'email',
    NAME: 'name',
    PASSWORD: 'password',
    CODE: 'token',
  },
  PLACEHOLDER: {
    EMAIL: 'E-mail',
    PASSWORD: 'Пароль',
    NAME: 'Имя',
    RESTORE: 'Укажите e-mail',
    NEW_PASS: 'Введите новый пароль',
    CODE: 'Введите код из письма',
  }
};

export const  SIZE : TSize = {
  DEFAULT: 'default',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const TOKEN: {
  REFRESH: string,
  ACCESS: string,
} = {
  REFRESH: 'refresh-token',
  ACCESS: 'access-token',
};

export const ERROR: {
  JWT_EXPIRED: string
} = {
  JWT_EXPIRED: 'jwt expired',
}

export const DND_TYPES: {
  ADD_INGREDIENT: string,
  SORTING_CARD: string,
} = {
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  SORTING_CARD: 'SORTING_CARD',
};

export const NORMA_URL: string = 'https://norma.nomoreparties.space/api'

export const ENDPOINT = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  USER: '/auth/user',
  REFRESH_TOKEN: '/auth/token',
  LOGOUT: '/auth/logout',
  FORGOT_PASSWORD: '/password-reset',
  RESET_PASSWORD: '/password-reset/reset',
  ORDERS: '/orders',
  INGREDIENTS: '/ingredients',
}

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

export const PATH = {
  HOME: '/',
  REGISTER: '/register',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
  PROFILE_ORDERS: '/profile/orders',
  INGREDIENT: '/ingredients/:id',
}

