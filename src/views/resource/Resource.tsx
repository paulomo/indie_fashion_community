import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { NonAuthRoutes } from '../../common/route/roles';
import { ResourceFirebaseService } from '../../networking';
import { ResourceCard } from './components/ResourceCard';

export const Resource: React.FC = () => {
  const history = useHistory();
  const resourceService = new ResourceFirebaseService();
  const { isLoading, isError, error, data } = useQuery(
    'readAllCollaboration',
    resourceService.useReadAllResource
  );

  return (
    <React.Fragment>
      <div className="flex justify-center text-center">
        <div>
          <button
            onClick={() => {
              history.push(NonAuthRoutes.submitResource);
            }}
          >
            New Resource
          </button>
        </div>
        <div className="grid-rows-2">
          <div>
            <div>
              {data?.map((item: any) => (
                <div key={item.id} onClick={() => console.log(item.id)}>
                  <ResourceCard
                    key={item.id}
                    collaborationTitle={item.jobTitle}
                    region={item.region}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    postedby={item.postedby}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
