import React from 'react';

export interface CollaborationCardProps {
  collaborationTitle: string;
  region: string;
  startDate: string;
  endDate: string;
  postedby: string;
}

export const CollaborationCard: React.FC<CollaborationCardProps> = ({
  collaborationTitle,
  region,
  startDate,
  endDate,
  postedby,
}: CollaborationCardProps) => {
  return (
    <React.Fragment>
      <div>
        <div>{collaborationTitle}</div>
        <div>
          <div>{postedby}</div>
          <div>{region}</div>
        </div>
        <div>
          <div>{startDate}</div>
          <div>{endDate}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
