import React from 'react';
import { useHistory } from "react-router-dom";
import { useQuery } from 'react-query';
import { NonAuthRoutes } from '../../common/route/roles';
import { CollaborationTopInfo } from './components/CollaborationTopInfo';
import { CollaborationFirebaseService } from '../../networking';
import { CollaborationCard } from './components/CollaborationCard';

export const Collaboration: React.FC = () => {
  const history = useHistory();
  const collaborationService = new CollaborationFirebaseService();
  const { isLoading, isError, error, data } = useQuery(
    'readAllCollaboration',
    collaborationService.useReadAllCollaboration
  );

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
            <div>
              {data?.map((item: any) => (
                <div key={item.id} onClick={() => console.log(item.id)}>
                  <CollaborationCard
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
