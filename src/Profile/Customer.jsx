import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Customer() {
  return (
    <div>
      <Skeleton variant="text" width={200} height={45} />
      <Skeleton variant="text" height={45} />
      <Skeleton variant="rect" height={400} />
    </div>
  );
}