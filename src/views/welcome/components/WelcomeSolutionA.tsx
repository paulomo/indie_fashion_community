import React from 'react';
import DasboardScreen from '../../common/images/dashboard-screen-borders.png';

export const WelcomeSolutionA: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <div className="grid grid-cols-12 gap-12 items-start font-montserrat">
          <div className="col-start-3 col-end-7">
            <div className="grid justify-around">
              <div className="my-4">
                <h2 className="text-3xl mb-2 font-semibold">How SaaS App Works</h2>
                <h3 className="text-base pt-2 leading-relaxed">Start free with $0 upfront investment</h3>
                <h3 className="text-base pt-2 leading-relaxed">Upload fashion products with sizes</h3>
                <h3 className="text-base pt-2 leading-relaxed">
                  We handle marketing and sales while you get paid
                </h3>
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-11">
            <img src={DasboardScreen} className="border border-gray-300 rounded" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
