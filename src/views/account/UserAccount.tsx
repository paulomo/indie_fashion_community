import React, { useContext, useEffect } from "react";
import { AuthContext } from "../auth/authState"

export const UserAccount: React.FC = () => {
    const { userId, userEmail, userRoles } = useContext(AuthContext);
    return (
      <React.Fragment>
        <h2>{userId}</h2>
        <h2>{userEmail}</h2>
        <h2>{userRoles}</h2>
      </React.Fragment>
    );
}