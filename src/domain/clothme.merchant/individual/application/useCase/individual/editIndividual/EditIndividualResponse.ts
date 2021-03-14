import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { EditIndividualError } from "./EditIndividualError";


export type EditIndividualResponse = Either<
    EditIndividualError.EmailDoesNotExist |
    EditIndividualError.EmailIsIncorrect |
    EditIndividualError.PasswordIsIncorrect |
    AppError |
    Result<any>,
    Result<void> 
>