import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { AddIndividualError } from "./AddIndividualError";


export type AddIndividualResponse = Either<
    AddIndividualError.EmailDoesNotExist |
    AddIndividualError.EmailIsIncorrect |
    AddIndividualError.PasswordIsIncorrect |
    AppError |
    Result<any>,
    Result<void> 
>