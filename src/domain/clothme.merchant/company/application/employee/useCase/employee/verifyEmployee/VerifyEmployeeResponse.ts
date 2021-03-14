import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { VerifyEmployeeError } from "./VerifyEmployeeError";


export type VerifyEmployeeResponse = Either<
    VerifyEmployeeError.EmployeeAlreadyVerified |
    VerifyEmployeeError.EmployeeDoesNotExist |
    AppError |
    Result<any>,
    Result<void> 
>