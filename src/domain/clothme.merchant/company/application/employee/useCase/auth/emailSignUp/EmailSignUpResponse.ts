import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { EmployeeEmailAlreadyExist, MerchantAlreadyExist } from './EmailSignUpError';


export type EmailSignUpResponse = Either<
    EmployeeEmailAlreadyExist |
    MerchantAlreadyExist |
    AppError |
    Result<any>,
    Result<void> 
>