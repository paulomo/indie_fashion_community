import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { TerminateEmployeeError } from "./TerminateEmployeeError";


export type TerminateEmployeeResponse = Either<
    TerminateEmployeeError.EmployeeAlreadyTerminated |
    TerminateEmployeeError.EmployeeCannotBeTerminated |
    TerminateEmployeeError.EmployeeDoesNotExist |
    AppError |
    Result<any>,
    Result<void> 
>