import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { EmailSignInError } from "./EmailSignInError";


export type EmailSignInResponse = Either<
    EmailSignInError.EmailDoesNotExist |
    EmailSignInError.EmailIsIncorrect |
    EmailSignInError.PasswordIsIncorrect |
    AppError |
    Result<any>,
    Result<void> 
>