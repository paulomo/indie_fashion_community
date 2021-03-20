import React from 'react';

export const PostJob: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <h2>Post A Job</h2>
          <input name="jobTitle" type="text" />
        </div>
        <div>
          <input name="city" type="text" />
          <input name="country" type="text" placeholder="Country" />
        </div>
        <div>
          <textarea name="jobContext" />
        </div>
      </div>
    </React.Fragment>
  );
};
