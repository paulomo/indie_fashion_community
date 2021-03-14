import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { AddEmployeeError } from "./AddEmployeeError";
import { EmployeeApplicationModel } from "../../../model/EmployeeApplicationModel";


export type AddEmployeeResponse = Either<
    AddEmployeeError.EmployeeAlreadyExist |
    AddEmployeeError.EmployeeCannotBeAdded |
    AddEmployeeError.NoPermission |
    AppError,
    Result<AddEmployeeResponseDTO>
>

export interface AddEmployeeResponseDTO {
    employee: EmployeeApplicationModel
}