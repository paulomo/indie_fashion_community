import React from 'react';

export const WelcomeTopInfoA: React.FC = () => {
  return (
    <React.Fragment>
      <div className="pt-40">
        <div>
          <img src="" />
        </div>
        <div>
          <img src="" />
        </div>
        <div className="grid grid-rows-1 gap-6 justify-items-center text-center font-montserrat">
          <div className="grid">
            <h3 className="text-6xl font-bold">Fashion E-Commerce</h3>
            <h3 className="text-6xl font-bold mt-2">With Consumers' Measurements</h3>
            <div className="justify-self-center">
              <h3 className="text-xl mt-14 leading-relaxed">
                ClothME's SaaS and Mobile Apps enables fashion consumers' to <strong>shop</strong>
              </h3>
              <h3 className="text-xl leading-relaxed">
                fashion products with their <strong>clothes measurements</strong>
              </h3>
              <h3 className="text-xl leading-relaxed">
                directly from <strong>brands</strong> and <strong>individuals</strong>.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
