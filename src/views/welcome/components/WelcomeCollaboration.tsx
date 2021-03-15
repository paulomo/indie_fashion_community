import React from 'react';

export const WelcomeCollaboration: React.FC = () => {
  return (
    <React.Fragment>
      <div className="grid grid-flow-col">
        <div className="flex">
          <div className="flex flex-1 gap-4">
            <h2>Today</h2>
            <h2>Weekly</h2>
            <h2>Monthly</h2>
          </div>
          <div className="flex items-start">
            <button>New Post</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
