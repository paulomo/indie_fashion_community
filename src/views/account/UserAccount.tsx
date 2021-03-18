import React, { useContext, useEffect } from "react";
import { AuthContext } from "../auth/authState"

export const UserAccount: React.FC = () => {
    const { user } = useContext(AuthContext);
    return (
        <React.Fragment>
            <h2>{user}</h2>
        </React.Fragment>
    )
}