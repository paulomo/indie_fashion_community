import React from 'react';
import { NavBarPages } from '../components';
import {
  WelcomeCollaboration,
  WelcomeJobList,
  WelcomeJoinUs,
  WelcomeNewLetterSignUp,
} from './components';

export const Welcome: React.FC = () => {
  return (
    <React.Fragment>
      <div className="bg-primary-background">
        <div>
          <NavBarPages />
        </div>

        <div className="grid grid-cols-6 gap-20 px-40 bg-primary-background h-full">
          <div className="grid col-start-1 col-end-5">
            <div>
              <WelcomeJobList />
            </div>
            <div>
              <WelcomeCollaboration />
            </div>
          </div>

          <div className="grid col-start-5 col-end-7">
            <div>
              <WelcomeJoinUs />
            </div>
            <div>
              <WelcomeNewLetterSignUp />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
