import React from 'react';

export interface ResourceCardProps {
  collaborationTitle: string;
  region: string;
  startDate: string;
  endDate: string;
  postedby: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  collaborationTitle,
  region,
  startDate,
  endDate,
  postedby,
}: ResourceCardProps) => {
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
