import { EmailSignUpDTO } from '../../../../../domain/clothme.merchant/company/application/employee/useCase/auth/emailSignUp/EmailSignUpDTO';
import { EmailSignUpResponse } from '../../../../../domain/clothme.merchant/individual/application/useCase/auth/emailSignUp/EmailSignUpResponse';
import { ISignUpState } from '../../../../../state/appState/AppState';

export function signUp(signupData: EmailSignUpDTO): ISignUpAction {
  return {
    type: SignUpActionTypes.SIGN_UP,
    payload: {
      data: signupData,
    },
  };
}

export function signningUp(): ISigningUpAction {
  return {
    type: SignUpActionTypes.SIGNING_UP,
  };
}

export function signedUp(responseData: ISignUpState): ISignedUpAction {
  return {
    type: SignUpActionTypes.SIGNED_UP,
    payload: {
      data: responseData,
    },
  };
}

export function signUpFailed(): ISignUpFailedAction {
  return {
    type: SignUpActionTypes.SIGN_UP_FAILED,
  };
}

export enum SignUpActionTypes {
  SIGN_UP = 'signup/start',
  SIGNING_UP = 'signup/in_progress',
  SIGNED_UP = 'signup/completed',
  SIGN_UP_FAILED = 'signup/failed',
}

export interface ISignUpAction {
  type: SignUpActionTypes.SIGN_UP;
  payload: {
    data: EmailSignUpDTO;
  };
}

export interface ISigningUpAction {
  type: SignUpActionTypes.SIGNING_UP;
}

export interface ISignedUpAction {
  type: SignUpActionTypes.SIGNED_UP;
  payload: {
    data: ISignUpState;
  };
}

export interface ISignUpFailedAction {
  type: SignUpActionTypes.SIGN_UP_FAILED;
}

export type SignUpAction = ISignUpAction | ISigningUpAction | ISignedUpAction | ISignUpFailedAction;
