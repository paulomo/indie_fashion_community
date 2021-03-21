import React from 'react';
import { useHistory } from "react-router-dom";
import { NonAuthRoutes } from '../../common/route/roles';
import { NavBar } from '../components';
import { CollaborationContent } from './components/CollaborationContent';
import { CollaborationTopInfo } from './components/CollaborationTopInfo';

export const Collaboration: React.FC = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="flex justify-center text-center">
        <div>
          <button
            onClick={() => {
              history.push(NonAuthRoutes.postCollaboration);
            }}
          >
            New Collaboration
          </button>
        </div>
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
