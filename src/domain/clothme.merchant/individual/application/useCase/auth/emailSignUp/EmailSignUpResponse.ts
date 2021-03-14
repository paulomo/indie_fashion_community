import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { EmailSignUpError } from "./EmailSignUpError";


export type EmailSignUpResponse = Either<
    EmailSignUpError.EmailAlreadyExist |
    EmailSignUpError.MerchantAlreadyExist |
    AppError |
    Result<any>,
    Result<void> 
>