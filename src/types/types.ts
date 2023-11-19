
export type TIngredientData = {
    _id?: string;
    name?: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

export type TIngredientCardData = TIngredientData & {
    quantity?: number;
}

export type TConstructorIngredient = TIngredientData & {
    index?: number;
}

export type TSize = {
    DEFAULT: 'default',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

export type TInput = {
    TYPE: {
        EMAIL: 'email';
        TEXT: 'text',
        PASSWORD: 'password',
    };
    NAME: {
        EMAIL: 'email',
        NAME: 'name',
        PASSWORD: 'password',
        CODE: 'token',
    };
    PLACEHOLDER: {
        EMAIL: string,
        PASSWORD: string,
        NAME: string,
        RESTORE: string,
        NEW_PASS: string,
        CODE: string,
    }
}

export type TFormValue = {
    email: string,
    password: string,
    name: string,
}

export type TGetUserData = Pick<TFormValue, 'name' | 'email'>

//TYPE API REQUEST DOWNWARDS

export type TServerResponse<T> = {
    success: boolean
} & T

export type TRefreshResponse = TServerResponse<{
    refreshToken: string,
    accessToken: string,
}>

export type TPostLoginResponse = TRefreshResponse & TUser

export type TUser = {
    email: string,
    name: string,
}

export type TUserResponse = TServerResponse<{user: TUser}>

export type TPatchUser = TServerResponse<{data: TGetUserData}>

export type TForgotPasswordDataRequest = TServerResponse<Pick<TFormValue, 'email'>>

export type TOrderDataRequest = TIngredientData[]

export type TResetPasswordDataRequest = {
    email: string,
    token: string,
}

export type TResetPasswordResponse = TServerResponse<{ message: string, }>


