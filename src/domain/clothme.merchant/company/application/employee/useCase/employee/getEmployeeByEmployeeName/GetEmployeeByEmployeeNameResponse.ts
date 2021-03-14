import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { GetEmployeeByEmployeeNameError } from "./GetEmployeeByEmployeeNameError";


export type GetEmployeeByEmployeeNameResponse = Either<
    GetEmployeeByEmployeeNameError.EmployeeDoesNotExist |
    AppError |
    Result<any>,
    Result<void> 
>