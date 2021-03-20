import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { PostFirebaseService } from "../../networking";
import { AuthContext } from '../auth/authState';
import { v4 as uuidv4 } from 'uuid';

export interface PostJobProps {
  jobTitle: string;
  jobDescription: string;
  jobRequirement: string[];
  startDate: string;
  endDate: string;
  postedby: string;
}

export const PostJob: React.FC = () => {
  const postId = uuidv4();
  const [countryData, setCountryData] = useState('');
  const [regionData, setRegionData] = useState('');
  const { register, handleSubmit, errors, reset } = useForm<PostJobProps>();

  const { userEmail } = useContext(AuthContext)
  const postService = new PostFirebaseService();

  const selectCountry = (val: React.SetStateAction<string>) => {
    setCountryData(val);
  };

  const selectRegion = (val: React.SetStateAction<string>) => {
    setRegionData(val);
  };

  const mutation = useMutation<any, any>(postService.useCreatePost, {
    onSuccess: () => {},
  });

  const onSubmit = (data: any) => {
    const toUpload = {
      ...data,
      id: postId + "#" + userEmail,
      email: userEmail,
      country: countryData,
      region: regionData
    }
    reset();
    setCountryData("");
    setRegionData("");
    mutation.mutateAsync(toUpload);
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>Post A Job</h2>
            <input
              name="jobTitle"
              type="text"
              placeholder="Job Title"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <textarea
              name="jobDescription"
              placeholder="Job Description"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <textarea
              name="jobRequirement"
              placeholder="Job Requirement"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <CountryDropdown value={countryData} onChange={selectCountry} />
            <RegionDropdown
              country={countryData}
              value={regionData}
              onChange={(val) => selectRegion(val)}
              name="countryData"
            />
          </div>
          <div>
            <input
              name="startDate"
              type="date"
              placeholder="Start Date"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <input
              name="endDate"
              type="date"
              placeholder="End Date"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <input
              name="postedby"
              type="text"
              placeholder="Country"
              ref={register({ required: true })}
            />
          </div>
          <button type="submit">Submit Post</button>
        </form>
      </div>
    </React.Fragment>
  );
};
