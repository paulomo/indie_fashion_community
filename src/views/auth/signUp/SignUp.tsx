import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { AuthFirebaseService } from '../../../networking';
import { useHistory } from 'react-router';
import { ErrorMessage } from "../../components/alert/ErrorMessage";
import { FaUser, FaLock } from 'react-icons/fa';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ErrorDialogView } from '../../components/errorDialogView/ErrorDialogView';

export interface SignUpProps {
  email: string;
  password: string;
}

export const SignUp: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm<SignUpProps>();
  const authService = new AuthFirebaseService();
    const mutation = useMutation<any, any>(authService.signUpWithEmail);

  const onSubmit = (data: any) => {
    reset();
    mutation.mutateAsync(data);
  };

  return (
    <React.Fragment>
      <div className="flex-1 h-screen justify-center">
        <div className="w-full h-screen bg-indigo-100 rounded flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-1/4 shadow-xl bg-white rounded-lg"
          >
            <h2 className="text-xl text-center text-gray-700 my-8">Sign Up</h2>
            <div className="px-12 pb-10">
              <div className="w-full mb-2">
                <div className="flex items-center border-b-2 border-gray-200">
                  {/* <FaUser className="fill-current text-gray-400 text-xs z-10" /> */}
                  <input
                    name="email"
                    type="text"
                    placeholder="Personal Email"
                    className="w-full py-2 ml-2 text-indigo-700 outline-none focus:bg-gray-300"
                    ref={register({ required: true })}
                  />
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="flex items-center border-b-2 border-gray-200">
                  {/* <FaLock className="fill-current text-gray-400 text-xs z-10" /> */}
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full py-2 ml-2 text-indigo-700 outline-none focus:bg-gray-300"
                    ref={register({ required: true })}
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
            <div>{mutation.isError === true && <div className="h-40 w-40 bg-red-400">{mutation.error.message}</div>}</div>
            <div>
              <Link to="/login">
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
