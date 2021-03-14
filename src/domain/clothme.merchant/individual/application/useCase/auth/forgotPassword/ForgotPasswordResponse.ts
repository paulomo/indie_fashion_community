import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { ForgotPasswordError } from "./ForgotPasswordError";


export type ForgotPasswordResponse = Either<
    ForgotPasswordError.EmailDoesNotExist |
    ForgotPasswordError.EmailIsInvalid |
    AppError |
    Result<any>,
    Result<void> 
>