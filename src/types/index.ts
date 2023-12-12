import {TUserAction} from "../services/actions/user";
import {TConstructorAction} from "../services/actions/burger-constructor";
import {TIngredientsAction} from "../services/actions/burger-ingredients";
import {TDetailsAction} from "../services/actions/details";
import {TOrderInfoAction} from "../services/actions/order-info";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TEntriesAction} from "../services/actions/entries";
import {TRecoverPasswordAction} from "../services/actions/recover-password";
import {TLogoutAction} from "../services/actions/logout";
import {rootReducer} from "../services/reducers/rootReducer";
import {TWSActions} from "../services/actions/ws";
import {TFeedActions} from "../services/actions/feed";
import {TOrderActions} from "../services/actions/order";



export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TAppActions>;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAppActions>;

type TAppActions =
    TUserAction | TEntriesAction | TLogoutAction |
    TConstructorAction | TIngredientsAction | TDetailsAction |
    TOrderInfoAction | TRecoverPasswordAction | TWSActions |
    TFeedActions | TOrderActions

