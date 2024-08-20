import { UserActionsTypes } from "./types/actions-types";
import { initialState, State, userReducerProps } from "./types/reducer-types";

// com base nos types de 
const userReducer = ({ state = initialState, action }: userReducerProps): State => {
    switch (action.type) {
        case UserActionsTypes.LOGIN:
            return { ...state, ...action.payload };
        case UserActionsTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
};