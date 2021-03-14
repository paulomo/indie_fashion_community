import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { EmailDoesNotExist, EmailIsInvalid } from "./ForgotPasswordError";


export type ForgotPasswordResponse = Either<
    EmailDoesNotExist |
    EmailIsInvalid |
    AppError |
    Result<any>,
    Result<void> 
>