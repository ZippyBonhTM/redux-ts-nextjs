import { UserActionsTypes } from "../actions-types"
import { State } from "../reducer-types"

interface LoginAction {
    type: UserActionsTypes.LOGIN,
    payload: State
}

interface LogoutAction {
    type: UserActionsTypes.LOGOUT
}

export type Action = LoginAction | LogoutAction;