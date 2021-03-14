import React, { useState } from 'react';
import { WelcomeSolutionA, WelcomeFeaturesInfoA, WelcomeNavBarA, WelcomePricingA, WelcomeStartButtonA, WelcomeTopInfoA, WelcomeGuideThreeImages, WelcomeFooterA, WelcomeOurCommitmentA,  } from './components';

export const Welcome: React.FC = () => {
  const [state, setState] = useState({
    title: 'Fashion Commerce',
    subTitle: '',
    textContent: "With Consumers' Measurement.",
  });

  return (
    <React.Fragment>
      {/* <!-- NAVBAR --> */}
      <div><WelcomeNavBarA /></div>

      {/* <!-- WRAPPER --> */}
      <div className="">
        <div id="home"></div>
        <div><WelcomeTopInfoA /></div>
        <div><WelcomeStartButtonA /></div>

        <div id="solution"></div>
        <div className="mt-48"><WelcomeSolutionA /></div>
        <div className="mt-40"><WelcomeFeaturesInfoA /></div>



        <div id="pricing"></div>
        <div className="mt-48"><WelcomePricingA /></div>

        <div className="mt-48"><WelcomeGuideThreeImages /></div>

        <div id="contact" className="mt-20"></div>
        <WelcomeFooterA />
      </div>
    </React.Fragment>
  );
};
