import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import CircularProgress from '@material-ui/core/CircularProgress';
import { v4 as uuidv4 } from 'uuid';

import { ApiStatus } from '../../../state/appState/AppState';
import { RootState } from '../../../state/redux/rootReducer/RootReducer';
import { signUp } from './state/actions/signUp.actions';
import { CompanyId } from '../../../domain/clothme.merchant/company/domain/value_object/company/CompanyId';
import Guid from '../../../domain/clothme.shared.kernel/domain/entity/Guid';
import { getDateWithSlashSeperator } from '../../../common/util/DateFormatted';
import { ErrorDialogView } from '../../components/errorDialogView/ErrorDialogView';

export interface CompanySignUpProps {
  companyName: string;
  companyEmail: string;
  companyPassword: string;
}

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const [companyDetail, setCompanyDetail] = useState<CompanySignUpProps>({
    companyName: '',
    companyEmail: '',
    companyPassword: '',
  });

  // For Showing Error Dialog and closing it
  const [openErrorDialogView, setOpenErrorDialogView] = React.useState(false);
  const handleClose = () => {
    setOpenErrorDialogView(false);
  };

  // getting state
  const signUpResult = useSelector((state: RootState) => state.signUpState.data);
  const loadingStatus = useSelector((state: RootState) => state.signUpState.loadingStatus);

  // useEffect(() => {
  //   if (signUpResult.isSuccess) {
  //   }
  // }, [signUpResult.isSuccess]);

  const showLoading = () => {
    return (
      loadingStatus === ApiStatus.FAILED &&
      setOpenErrorDialogView(true) && (
        <ErrorDialogView
          errorMessage={signUpResult.errorMessage}
          openDialog={openErrorDialogView}
          handleClose={handleClose}
        />
      )
    );
  };

  const showErrorModal = () => {
    return loadingStatus === ApiStatus.LOADING && <CircularProgress />;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    showLoading();
    console.log(loadingStatus);
    console.log(companyDetail);

    dispatch(
      signUp({
        companyId: CompanyId.create(new Guid(companyDetail.companyName + '#' + uuidv4()))
          .getValue()
          .id.toString(),
        companyName: companyDetail.companyName,
        locationId: CompanyId.create(new Guid(companyDetail.companyName + '#' + uuidv4()))
          .getValue()
          .id.toString(),
        locationName: companyDetail.companyName + '#' + 'HeadOffice',
        email: companyDetail.companyEmail,
        password: companyDetail.companyPassword,
        tier: 'earlyTenantFree',
        signUpDate: getDateWithSlashSeperator(new Date()),
        activityDate: getDateWithSlashSeperator(new Date()),
      })
    );

    showErrorModal();
    console.log(loadingStatus);
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const elementName = event.target.value;
    setCompanyDetail({
      ...companyDetail,
      [event.target.name]: elementName,
    });
    console.log(elementName);
  };

  return (
    <React.Fragment>
      <div className="flex-1 h-screen justify-center">
        <div className="w-full h-screen bg-indigo-100 rounded flex items-center justify-center">
          <form className="w-full md:w-1/4 shadow-xl bg-white rounded-lg">
            <h2 className="text-xl text-center text-gray-700 my-8">Sign Up</h2>
            <div className="px-12 pb-10">
              <div className="w-full mb-2">
                <div className="flex items-center border-b-2 border-gray-200">
                  <FaUser className="fill-current text-gray-400 text-xs z-10" />
                  <input
                    value={companyDetail.companyName}
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="Company Name"
                    className="w-full py-2 ml-2 text-indigo-700 outline-none focus:bg-gray-300"
                  />
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="flex items-center border-b-2 border-gray-200">
                  <FaUser className="fill-current text-gray-400 text-xs z-10" />
                  <input
                    value={companyDetail.companyEmail}
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="Personal Email"
                    className="w-full py-2 ml-2 text-indigo-700 outline-none focus:bg-gray-300"
                  />
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="flex items-center border-b-2 border-gray-200">
                  <FaLock className="fill-current text-gray-400 text-xs z-10" />
                  <input
                    value={companyDetail.companyPassword}
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="Password"
                    className="w-full py-2 ml-2 text-indigo-700 outline-none focus:bg-gray-300"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 mt-10 rounded text-white focus:outline-none hover:bg-blue-400"
              >
                Sign Up
              </button>
            </div>
            <div>
              <Link to="/sign-in">
                <h2 className="flex flex-auto mt-4 text-xs text-gray-500 justify-center mb-4">
                  Already Have An Account? Sign In
                </h2>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
