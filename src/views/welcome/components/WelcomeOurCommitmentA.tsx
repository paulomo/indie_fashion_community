import React from 'react';
import ShoppingFashionOnLine from '../../common/images/shopping-fashion-online.jpg';

export const WelcomeOurCommitmentA: React.FC = () => {
  return (
    <React.Fragment>
      <div className="grid w-full text-white mb-8 bg-black">
        <div className="ml-24 mt-6 text-3xl font-semibold font-karla">
          <h2>Our Commitment To Fashion Brands</h2>
        </div>
        <div className="grid justify-center grid-cols-3 gap-4 px-24 py-8 items-center">
          <div className="grid content-center">
            <div className="justify-self-center rounded">
              <img src={ShoppingFashionOnLine} className="rounded" />
              <h3>Our <strong>No Compete Policy</strong> means we'll never have an in-house brand or invest in brands</h3>
            </div>
          </div>
          <div className="grid content-center">
            <div className="justify-self-center rounded">
              <img src={ShoppingFashionOnLine} className="rounded" />
              <h3>We are Committed to the industry, we'll donate 10% of revenue to help brands every year for 10years.</h3>
            </div>
          </div>
          <div className="grid content-center">
            <div className="justify-self-center rounded">
              <img src={ShoppingFashionOnLine} className="rounded" />
              <h3>You own your data and you can walk away anytime. We'll ensure we do everything to earn your stay.</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
