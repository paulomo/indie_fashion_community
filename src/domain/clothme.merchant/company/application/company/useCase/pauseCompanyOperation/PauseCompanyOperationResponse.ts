import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { PauseCompanyOperationError } from "./PauseCompanyOperationError";


export type PauseCompanyOperationResponse = Either<
    PauseCompanyOperationError.EmailDoesNotExist |
    PauseCompanyOperationError.EmailIsIncorrect |
    PauseCompanyOperationError.PasswordIsIncorrect |
    AppError |
    Result<any>,
    Result<void> 
>