import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { GetEmployeeByEmployeeIdError } from "./GetEmployeeByEmployeeIdError";
import { EmployeeApplicationModel } from "../../../model/EmployeeApplicationModel";


export type GetEmployeeByEmployeeIdResponse = Either<
    GetEmployeeByEmployeeIdError.EmployeeDoesNotExist |
    AppError,
    Result<GetEmployeeByEmployeeIdResponseDTO> 
>

export interface GetEmployeeByEmployeeIdResponseDTO {
    employee: EmployeeApplicationModel
}
