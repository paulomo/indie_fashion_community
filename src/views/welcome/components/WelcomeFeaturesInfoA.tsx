import React from 'react';
import FashionShoppingApp from '../../common/images/fashion-shopping-app.jpg';

export const WelcomeFeaturesInfoA: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex gap-16 justify-center h-24 w-full text-sm font-karla">
        <div className="grid text-center">
          <img src={FashionShoppingApp} className="justify-self-center rounded w-24 h-16" />
          <h3>Own Your Data</h3>
        </div>
        <div className="grid text-center">
          <img src={FashionShoppingApp} className="justify-self-center rounded w-24 h-16" />
          <h2>Sell Without Marketing</h2>
        </div>
        <div className="grid text-center">
          <img src={FashionShoppingApp} className="justify-self-center rounded w-24 h-16" />
          <h2>Non Compete Policy</h2>
        </div>
        <div className="grid text-center">
          <img src={FashionShoppingApp} className="justify-self-center rounded w-24 h-16" />
          <h2>Choose A City</h2>
        </div>
        <div className="grid text-center">
          <img src={FashionShoppingApp} className="justify-self-center rounded w-24 h-16" />
          <h2>You Set Your Price</h2>
        </div>
        <div className="grid text-center">
          <img src={FashionShoppingApp} className="justify-self-center rounded w-24 h-16" />
          <h2>Option Of Shipping</h2>
        </div>
      </div>
    </React.Fragment>
  );
};
