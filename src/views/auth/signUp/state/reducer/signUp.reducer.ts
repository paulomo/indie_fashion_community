import produce from 'immer';
import { ISignUpState, ApiStatus } from '../../../../../state/appState/AppState';
import { InitialState } from '../../../../../state/appState/InitialState';
import { SignUpAction, SignUpActionTypes } from '../actions/signUp.actions';

export const initialEmployeeState: AuthState = {
  loadingStatus: ApiStatus.LOADING,
  addingStatus: ApiStatus.LOADED,
  data: InitialState.signUpState,
};

export function signUpReducer(state: AuthState = initialEmployeeState, action: SignUpAction) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SignUpActionTypes.SIGN_UP:

      case SignUpActionTypes.SIGNING_UP:
        draft.loadingStatus = ApiStatus.LOADING;
        break;

      case SignUpActionTypes.SIGN_UP_FAILED:
        draft.loadingStatus = ApiStatus.FAILED;
        break;

      case SignUpActionTypes.SIGNED_UP:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.data = action.payload.data;
        break;
    }
  });
}

export interface AuthState {
  loadingStatus: ApiStatus;
  addingStatus: ApiStatus;
  data: ISignUpState;
}
