import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { PostFirebaseService } from '../../../networking/';

export interface JobPostDetailProps {
  jobPostId: string;
}

export const JobPostDetail: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const jobPostService = new PostFirebaseService();
  const { isLoading, isError, error, data } = useQuery(
    ['getSingleJobPost', id],
    jobPostService.useReadSinglePost
  );
  return (
    <React.Fragment>
      <div>{id}</div>
      <div>{data?.country}</div>
      <div>{data?.email}</div>
      <div>{data?.endDate}</div>
      <div>{data?.jobDescription}</div>
      <div>{data?.jobRequirement}</div>
      <div>{data?.jobTitle}</div>
      <div>{data?.postedby}</div>
      <div>{data?.region}</div>
      <div>{data?.startDate}</div>
    </React.Fragment>
  );
};
