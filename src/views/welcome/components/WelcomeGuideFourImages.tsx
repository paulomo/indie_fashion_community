import React from 'react';
import ShoppingFashionOnLine from '../../common/images/shopping-fashion-online.jpg';

export const WelcomeGuideFourImages: React.FC = () => {
  return (
    <React.Fragment>
      <div className="grid w-full bg-black">
        <div className="ml-24 mt-6 text-2xl text-gray-50 font-semibold">
          <h2>Our Commitment To Fashion Brands</h2>
        </div>
        <div className="grid justify-center grid-cols-4 gap-4 px-24 py-8 items-center">
          <div className="grid content-center">
            <div className="justify-self-center">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="text-gray-50 mb-6">
              <h3>Our <strong>No Compete Policy</strong> means we'll never have an in-house brand or invest in brands</h3>
            </div>
          </div>
          <div className="grid content-center">
            <div className="justify-self-center">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="text-gray-50 mb-6">
              <h3>We are Committed to the industry, so we will donate 10% of revenue to help brands every year</h3>
            </div>
          </div>
          <div className="grid content-center">
            <div className="justify-self-center">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="text-gray-50 mb-6">
              <h3>You own your data and can walk away anytime. We will ensure we do everything to earn your stay.</h3>
            </div>
          </div>
          <div className="grid content-center">
            <div className="justify-self-center">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="text-gray-50 mb-6">
              <h3> It's hard for Consumers' to find the right fit</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

