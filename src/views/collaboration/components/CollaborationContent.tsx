import React from 'react';

export const CollaborationContent = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-start-1 col-end-3">Content Category</div>
        <div className="col-start-3 col-end-7">Main Content</div>
      </div>
    </React.Fragment>
  );
};
