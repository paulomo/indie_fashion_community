import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { ResourceFirebaseService } from '../../networking';
import { AuthContext } from '../auth/authState';
import { v4 as uuidv4 } from 'uuid';

export interface PostJobProps {
  resourceName: string;
  resourceBio: string;
  resourceUrl: string;
  resourceType: string;
  postedby: string;
}

export const SubmitResource: React.FC = () => {
  const collaborationId = uuidv4();
  const [countryData, setCountryData] = useState('');
  const [regionData, setRegionData] = useState('');
  const { register, handleSubmit, errors, reset } = useForm<PostJobProps>();

  const { userEmail } = useContext(AuthContext);
  const resourceService = new ResourceFirebaseService();

  const selectCountry = (val: React.SetStateAction<string>) => {
    setCountryData(val);
  };

  const selectRegion = (val: React.SetStateAction<string>) => {
    setRegionData(val);
  };

  const mutation = useMutation<any, any>(resourceService.useCreateResource, {
    onSuccess: () => {},
  });

  const onSubmit = (data: any) => {
    const toUpload = {
      ...data,
      id: collaborationId + '#' + userEmail,
      email: userEmail,
      country: countryData,
      region: regionData,
    };
    reset();
    setCountryData('');
    setRegionData('');
    mutation.mutateAsync(toUpload);
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>Post Collaboration</h2>
            <input
              name="resourceName"
              type="text"
              placeholder="Name"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <textarea
              name="resourceBio"
              placeholder="Bio"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <input
              name="resourceType"
              placeholder="Type"
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
              name="resourceUrl"
              type="text"
              placeholder="URL"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <input
              name="postedby"
              type="text"
              placeholder="Post By"
              ref={register({ required: true })}
            />
          </div>
          <button type="submit">Submit Resource</button>
        </form>
      </div>
    </React.Fragment>
  );
};
