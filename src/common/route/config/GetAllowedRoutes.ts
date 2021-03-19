import intersection from "lodash/intersection";

export function isArrayWithLength(arr: string | any[]) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes: any[], roles: string[]) {
  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, roles).length;
  });
}
