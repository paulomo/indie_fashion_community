import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

export interface ForgotPasswordProps {
  email: string;
}

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="flex-1 h-screen justify-center">
        <div className="w-full h-screen bg-indigo-100 rounded flex items-center justify-center">
          <form className="w-full md:w-1/4 shadow-xl bg-white rounded-lg">
            <h2 className="text-xl text-center text-gray-700 my-8">
              Forgot Password
            </h2>
            <div className="px-12 pb-10">
              <div className="w-full mb-2">
                <div className="flex items-center border-b-2 border-gray-200">
                  <FaUser className="fill-current text-gray-400 text-xs z-10" />
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full py-2 ml-2 text-indigo-700 outline-none focus:bg-gray-300"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 mt-10 rounded text-white text-gray-100 focus:outline-none hover:bg-blue-400">
                Submit
              </button>
            </div>
            <div>
              <Link to="/sign-in">
                <h2 className="flex flex-auto mt-4 text-xs text-gray-500 justify-center mb-4">
                  Sign In
                </h2>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
