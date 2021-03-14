import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { AssignRoleError } from "./AssignRoleError";
import { EmployeeRolesModel } from "../../../model/EmployeeApplicationModel";


export type AssignRoleResponse = Either<
    AssignRoleError.EmployeeDoesNotExist |
    AssignRoleError.NeedPermission |
    AppError,
    Result<EmployeeRolesDTO>
>

export interface EmployeeRolesDTO {
    rolesData: EmployeeRolesModel;
} 