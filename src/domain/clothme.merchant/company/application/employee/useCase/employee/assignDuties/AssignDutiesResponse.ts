import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { AssignDutiesError } from "./AssignDutiesError";
import { EmployeeDutiesModel } from "../../../model/EmployeeApplicationModel";


export type AssignDutiesResponse = Either<
    AssignDutiesError.EmployeeDoesNotExist |
    AssignDutiesError.NeedPermission |
    AppError,
    Result<EmployeeDutiesDTO>
>

export interface EmployeeDutiesDTO {
    dutiesData: EmployeeDutiesModel;
}