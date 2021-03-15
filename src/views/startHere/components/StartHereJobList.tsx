import React from 'react';

export const StartHereJobList: React.FC = () => {
  return (
    <React.Fragment>
      <div className="grid grid-flow-col">
        <div className="flex">
          <div className="flex gap-4">
            <h2>Today</h2>
            <h2>Weekly</h2>
            <h2>Monthly</h2>
          </div>
          <div>New Post</div>
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
};
