import { Action } from "./actions/index";

// relativo ao payload
export interface State {
    user: string | null;
    account: number | null;
}

// estado inicial ou da action "LOGOUT"
export const initialState: State = {
    user: null,
    account: null
}

// Propriedades do userReducer
export interface userReducerProps {
    state: State
    action: Action
}