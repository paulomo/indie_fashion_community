import React from 'react';

export interface JobCardProps {
  jobTitle: string;
  region: string;
  startDate: string;
  endDate: string;
  postedby: string;
}

export const JobCard: React.FC<JobCardProps> = ({
  jobTitle,
  region,
  startDate,
  endDate,
  postedby,
}: JobCardProps) => {
  return (
    <React.Fragment>
      <div>
        <div>{jobTitle}</div>
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
