import React from 'react';
import ShoppingFashionOnLine from '../../common/images/shopping-fashion-online.jpg';

const WelcomeGuideThreeImages: React.FC = () => {
  return (
    <React.Fragment>
      <div className="grid w-full text-white">
        <div className="ml-24 mt-6 text-3xl font-semibold font-karla">
          <h2>Easy And Quick Fashion Shopping Experience</h2>
        </div>
        <div className="grid justify-center grid-cols-3 gap-4 px-24 py-8 items-center">
          <div className="grid content-center text-center font-semibold">
            <div className="justify-self-center rounded">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="mb-8">
              <h3>Never Have To Guess If A Product Fits You</h3>
            </div>
          </div>
          <div className="grid content-center text-center font-semibold">
            <div className="justify-self-center rounded">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="mb-8">
              <h3>Always Shop Directly From Brands You and Love</h3>
            </div>
          </div>
          <div className="grid content-center text-center font-semibold">
            <div className="justify-self-center rounded">
              <img src={ShoppingFashionOnLine} className="rounded" />
            </div>
            <div className="mb-8">
              <h3>Save on Dasiscounts For You and Your Family</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { WelcomeGuideThreeImages };
