import { combineReducers } from "redux";
import { signUpReducer } from "../../../views/auth/signUp/state/reducer/signUp.reducer";

export const rootReducer = combineReducers({
    signUpState: signUpReducer

});

export type RootState = ReturnType<typeof rootReducer>;