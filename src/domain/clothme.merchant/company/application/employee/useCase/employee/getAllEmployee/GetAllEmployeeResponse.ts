import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { GetAllEmployeeError } from "./GetAllEmployeeError";


export type GetAllEmployeeResponse = Either<
    GetAllEmployeeError.EmployeeDoesNotExist |
    AppError |
    Result<any>,
    Result<void> 
>