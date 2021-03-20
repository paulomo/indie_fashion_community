import React from 'react';
import { useHistory } from 'react-router-dom';
import { NonAuthRoutes } from "../../common/route/roles/RouteEnum"
import { NavBar } from '../components';

export const Job: React.FC = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div>
        <NavBar />
      </div>
      <div className="pt-28"></div>
      <div>
        <button onClick={() => {history.push(NonAuthRoutes.postNewJob)}}>New Job Post</button>
      </div>
    </React.Fragment>
  );
};
