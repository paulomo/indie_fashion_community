import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { VerifyIndividualError } from "./VerifyIndividualError";


export type VerifyIndividualResponse = Either<
    VerifyIndividualError.EmployeeAlreadyVerified |
    VerifyIndividualError.EmployeeDoesNotExist |
    AppError |
    Result<any>,
    Result<void> 
>