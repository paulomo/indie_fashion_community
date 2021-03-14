import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomeFooterA: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex items-center w-full h-16 font-karla">
        <div className="flex-1 pl-32 font-semibold">ClothME 2021</div>
        <div className="flex-1">
          <h5 className="flex justify-center">
            <ul className="flex">
              <li className="px-4">
                <Link to="/about">About</Link>
              </li>
              <li className="px-4">
                <Link to="/policies">Policy</Link>
              </li>
              <li className="px-4">
                <Link to="/merchant-sell-to-millions">For Brands</Link>
              </li>
              <li className="px-4">
                <Link to="/consumer-get-5-percent-for-one-year">For Consumers</Link>
              </li>
              <li className="px-4">
                <Link to={{ pathname: 'https://clothme.blog' }} target="_blank">
                  Blog
                </Link>
              </li>
            </ul>
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
};
