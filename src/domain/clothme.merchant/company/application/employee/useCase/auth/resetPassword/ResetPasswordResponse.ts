import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { EmployeeEmailDoesNotExist, SamePassword } from "./ResetPasswordError";
import { EmployeeApplicationModel } from "../../../model/EmployeeApplicationModel";


export type ResetPasswordResponse = Either<
    EmployeeEmailDoesNotExist |
    SamePassword |
    AppError,
    Result<ResetPasswordResponseDTO> 
>

export interface ResetPasswordResponseDTO {
    employee: EmployeeApplicationModel
}