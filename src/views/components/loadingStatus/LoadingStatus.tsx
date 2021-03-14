import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ApiStatus } from '../../common/ApiStatus';

interface LoadingStatusProps {
    loadingStatus: ApiStatus
}

export const LoadingStatus: React.FC = () => {
  return (
    <CircularProgress />
  );
};
