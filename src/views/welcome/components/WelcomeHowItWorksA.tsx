import React from 'react';
import ShoppingFashionOnLine from '../../common/images/shopping-fashion-online.jpg';

export const WelcomeHowItWorksA: React.FC = () => {
  return (
    <React.Fragment>
      <div className="grid w-full text-white">
        <div className="ml-24 mt-6 text-3xl font-semibold font-karla">
          <h2>Easy And Fast Fashion Shopping Experience</h2>
        </div>
        <div className="grid justify-center grid-cols-3 gap-4 px-24 py-8 items-center">
          <div className="grid content-center">
            <div className="justify-self-center rounded">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="mb-8">
              <h3> It's hard for Consumers' to find the right fit</h3>
            </div>
          </div>
          <div className="grid content-center">
            <div className="justify-self-center rounded">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="mb-8">
              <h3> It's hard for Consumers' to find the right fit</h3>
            </div>
          </div>
          <div className="grid content-center">
            <div className="justify-self-center rounded">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="mb-8">
              <h3> It's hard for Consumers' to find the right fit</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

