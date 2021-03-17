import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AccountFirebaseService } from '../../../networking';
import { FaUser, FaLock } from 'react-icons/fa';

export interface SignInProps {
  email: string;
  password: string;
}

export const SignIn: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm<SignInProps>();
  const accountService = new AccountFirebaseService();
  const { isLoading, isError, error, mutateAsync } = useMutation(accountService.useSaveDataToAccount);

  const onSubmit = (data: any) => {
    reset();
    mutateAsync(data);
  };

  return (
    <React.Fragment>
      <div className="flex-1 h-screen justify-center">
        <div className="w-full h-screen bg-indigo-100 rounded flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-1/4 shadow-xl bg-white rounded-lg"
          >
            <h2 className="text-xl text-center text-gray-700 my-8">Login</h2>
            <div className="px-12 pb-10">
              <div className="w-full mb-2">
                <div className="flex items-center border-b-2 border-gray-200">
                  {/* <FaUser className="fill-current text-gray-400 text-xs z-10" /> */}
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
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
                    type="text"
                    placeholder="Password"
                    className="w-full py-2 ml-2 text-indigo-700 outline-none focus:bg-gray-300"
                    ref={register({ required: true })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-10 rounded text-white text-gray-100 focus:outline-none hover:bg-blue-400"
              >
                Sign In
              </button>
              <div>{isError === false && (<div className="h-40 w-40 bg-red-400">121314</div>)}</div>
              <div>
                <Link to="/forgot-password">
                  <h2 className="text-xs mt-2 text-gray-500 float-right mb-4">Forgot Password?</h2>
                </Link>
              </div>
            </div>
            <div>
              <Link to="/sign-up">
                <h2 className="flex flex-auto mt-4 text-xs text-gray-500 justify-center mb-4">
                  Don't Have An Account? Sign Up
                </h2>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
