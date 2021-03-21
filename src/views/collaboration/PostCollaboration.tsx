import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { CollaborationFirebaseService } from '../../networking';
import { AuthContext } from '../auth/authState';
import { v4 as uuidv4 } from 'uuid';

export interface PostJobProps {
  collaborationTitle: string;
  collaborationDescription: string;
  collaborationOffer: string;
  collaborationAsk: string;
  startDate: string;
  endDate: string;
  postedby: string;
}

export const PostCollaboration: React.FC = () => {
  const collaborationId = uuidv4();
  const [countryData, setCountryData] = useState('');
  const [regionData, setRegionData] = useState('');
  const { register, handleSubmit, errors, reset } = useForm<PostJobProps>();

  const { userEmail } = useContext(AuthContext);
  const collaborationService = new CollaborationFirebaseService();

  const selectCountry = (val: React.SetStateAction<string>) => {
    setCountryData(val);
  };

  const selectRegion = (val: React.SetStateAction<string>) => {
    setRegionData(val);
  };

  const mutation = useMutation<any, any>(collaborationService.useCreateCollaboration, {
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
              name="collaborationTitle"
              type="text"
              placeholder="Title"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <textarea
              name="collaborationDescription"
              placeholder="Description"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <textarea
              name="collaborationOffer"
              placeholder="Offer"
              ref={register({ required: true })}
            />
          </div>

          <div>
            <textarea
              name="collaborationAsk"
              placeholder="Ask"
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
              placeholder="Posted By"
              ref={register({ required: true })}
            />
          </div>
          <button type="submit">Submit Post</button>
        </form>
      </div>
    </React.Fragment>
  );
};
