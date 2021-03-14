import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { EditCompanyError } from "./EditCompanyError";


export type EditCompanyResponse = Either<
    EditCompanyError.EmailDoesNotExist |
    EditCompanyError.EmailIsIncorrect |
    EditCompanyError.PasswordIsIncorrect |
    AppError |
    Result<any>,
    Result<void> 
>