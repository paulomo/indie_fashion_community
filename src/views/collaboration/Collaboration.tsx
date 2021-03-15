import React from 'react';
import { NavBar } from '../components';
import { CollaborationContent } from './components/CollaborationContent';
import { CollaborationTopInfo } from './components/CollaborationTopInfo';

export const Collaboration: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center text-center">
        <div className="grid-rows-2">
          <div>
            <CollaborationTopInfo />
          </div>
          <div>
            <CollaborationContent />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
