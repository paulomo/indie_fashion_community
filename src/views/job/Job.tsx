import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { NonAuthRoutes } from '../../common/route/roles/RouteEnum';
import { NavBar } from '../components';
import { PostFirebaseService } from '../../networking';
import { JobCard } from './components/JobCard';

export const Job: React.FC = () => {
  const history = useHistory();
  const postService = new PostFirebaseService();
  const { isLoading, isError, error, data } = useQuery('readAllPost', postService.useReadAllPost);

  return (
    <React.Fragment>
      <div className="pt-28"></div>
      <div>
        <button
          onClick={() => {
            history.push(NonAuthRoutes.postNewJob);
          }}
        >
          New Job Post
        </button>
        <div>
          {data?.map((item: any) => (
              <JobCard
                key={item.id}
                jobTitle={item.jobTitle}
                region={item.region}
                startDate={item.startDate}
                endDate={item.endDate}
                postedby={item.postedby}
              />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
