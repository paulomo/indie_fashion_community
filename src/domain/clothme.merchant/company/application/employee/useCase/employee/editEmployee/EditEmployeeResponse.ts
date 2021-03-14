import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { EditEmployeeError } from "./EditEmployeeError";


export type EditEmployeeResponse = Either<
    EditEmployeeError.EmailDoesNotExist |
    EditEmployeeError.EmailIsIncorrect |
    EditEmployeeError.PasswordIsIncorrect |
    AppError |
    Result<any>,
    Result<void> 
>