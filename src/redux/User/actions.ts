import { UserActionsTypes } from "./types/actions-types";
import { State } from "./types/reducer-types";

export const loginUser = (payload: State) => ({
    type: UserActionsTypes.LOGIN,
    payload
})

export const logoutUser = () => ({
    type: UserActionsTypes.LOGOUT
})