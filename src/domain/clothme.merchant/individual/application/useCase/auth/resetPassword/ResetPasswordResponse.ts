import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { ResetPasswordError } from "./ResetPasswordError";


export type ResetPasswordResponse = Either<
    ResetPasswordError.EmployeeEmailAlreadyExist |
    ResetPasswordError.MerchantAlreadyExist |
    AppError |
    Result<any>,
    Result<void> 
>