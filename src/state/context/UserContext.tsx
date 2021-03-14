import React, { createContext, useState } from "react";
import { PropTypes } from "@material-ui/core";

export const AuthContext = createContext({});

export interface AuthDataProps {
  children: {}
}
export const AuthData: React.FC<AuthDataProps> = ({ children }: AuthDataProps) => {
  const [employeeId, setEmployeeId] = useState();
  const [locationId, setLocationId] = useState();
  const [companyId, setNameCompanyId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [companyName, setCompany] = useState();
  const [locationName, setLocationName] = useState();


  return (
    <AuthContext.Provider
      value={{
        employeeId,
        setEmployeeId,
        locationId,
        setLocationId,
        companyId,
        setNameCompanyId,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        companyName,
        setCompany,
        locationName,
        setLocationName
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};