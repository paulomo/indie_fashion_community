import { Epic } from 'redux-observable';
import {
  map,
  startWith,
  catchError,
  filter,
  mergeMap,
} from 'rxjs/operators';
import {
  SignUpAction,
  SignUpActionTypes,
  signningUp,
  signedUp,
  signUpFailed,
} from '../actions/signUp.actions';
import { AppState } from '../../../../../state/appState/AppState';
import { EmailSignUp } from "../../../../../domain/clothme.merchant/company/application/employee"
import { AuthFirebaseService } from "../../../../../domain/clothme.networking"
import { from, of } from 'rxjs';
import { isOfType } from 'typesafe-actions';
import { AuthDataMapper } from '../../../common/authDataMapper/AuthDataMapper';

const service = new AuthFirebaseService();
const emailSignUp = new EmailSignUp(service);

const signUpEpic: Epic<SignUpAction, SignUpAction, AppState> = (action$, state$) =>
  action$.pipe(
    filter(isOfType(SignUpActionTypes.SIGN_UP)),
    mergeMap((action) =>
      from(emailSignUp.execute(action.payload.data)).pipe(
        map((result) => AuthDataMapper.mapToSignUpState(result)),
        map((response) => signedUp(response)),
        startWith(signningUp()),
        catchError(() => of(signUpFailed()))
      )
    )
  );

  export { signUpEpic };
