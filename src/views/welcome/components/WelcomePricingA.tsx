import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export const WelcomePricingA: React.FC = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 w-full h-96 font-karla">
        <div className="grid justify-self-center text-3xl mb-10 font-semibold">
          <h2>Simple Pricing Options</h2>
        </div>
        <div className="grid grid-cols-2 gap-20 w-full p-14 content-center">
          <div className="grid rounded justify-self-end p-10 text-white">
            <div className="grid justify-self-center text-xl font-semibold">
              <h2 className="text-xl pb-4">Pay As You Earn</h2>
            </div>
            <div className="flex flex-row mt-1">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4"> No setup fee.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4"> No monthly charges.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4">You Only pay a 30% of sales on our platform.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4">Upload upto 20 products.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4">Sell from upto 5 locations.</h2>
            </div>
            <div className="flex flex-row mt-2">
            <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4">Upto 5 team members.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4"> Brand product, sales and customer data analytics.</h2>
            </div>
          </div>
          <div className="grid rounded justify-self-start p-10 text-white">
            <div className="grid justify-self-center text-xl font-semibold">
              <h2 className="pl-text-xl pb-4">Pay As You Grow</h2>
            </div>
            <div className="pl-flex flex-row mt-1">
              <span className="pl-pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-pl-4"> No setup fee.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4">Monthly fees of $29 per location.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4">You only pay a 30% of sales on our platform.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4">Upload unlimited products.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4">Sell from unlimited locations.</h2>
            </div>
            <div className="flex flex-row mt-2">
            <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4">Unlimited team members.</h2>
            </div>
            <div className="flex flex-row mt-2">
              <span className="pt-1">
                <FaCheck />
              </span>
              <h2 className="pl-4"> Platform product, sales and customer data analytics.</h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
