import {
  EmployeeEmailAlreadyExist,
  MerchantAlreadyExist,
} from '../../../../domain/clothme.merchant/company/application/employee/useCase/auth/emailSignUp/EmailSignUpError';
import { EmailSignUpResponse } from '../../../../domain/clothme.merchant/company/application/employee/useCase/auth/emailSignUp/EmailSignUpResponse';
import { ApiStatus, ISignUpState } from '../../../../state/appState/AppState';

export class AuthDataMapper {
  public static mapToSignUpState(result: EmailSignUpResponse): ISignUpState {
    let signUpState: ISignUpState = {
      loadingStatus: ApiStatus.LOADING,
      addingStatus: ApiStatus.LOADED,
      errorMessage: '',
      isSuccess: false,
    };
    if (result.isLeft()) {
      const error = result.value;
      switch (error.constructor) {
        case EmployeeEmailAlreadyExist:
          return (signUpState = {
            loadingStatus: ApiStatus.LOADING,
            addingStatus: ApiStatus.LOADED,
            errorMessage: '',
            isSuccess: false,
          });
        case MerchantAlreadyExist:
          return (signUpState = {
            loadingStatus: ApiStatus.LOADING,
            addingStatus: ApiStatus.LOADED,
            errorMessage: '',
            isSuccess: false,
          });
      }
    } else {
      return (signUpState = {
        loadingStatus: ApiStatus.LOADING,
        addingStatus: ApiStatus.LOADED,
        errorMessage: '',
        isSuccess: true,
      });
    }
    return signUpState;
  }
}
