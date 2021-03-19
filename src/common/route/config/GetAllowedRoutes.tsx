import React, { useContext } from "react";
import intersection from "lodash/intersection";
import { AuthContext } from "../../../views/auth/authState";

export function isLoggedIn() {
  const context = useContext(AuthContext);
  return context.userId
}

export function isArrayWithLength(arr: string | any[]) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes: any[]) {
  const context = useContext(AuthContext);
  const roles = context.userRoles
  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, roles).length;
  });
}
