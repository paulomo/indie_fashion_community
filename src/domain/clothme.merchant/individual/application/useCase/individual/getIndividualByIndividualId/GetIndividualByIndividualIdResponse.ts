import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetIndividualByIndividualIdError } from "./GetIndividualByIndividualIdError";


export type GetIndividualByIndividualIdResponse = Either<
    GetIndividualByIndividualIdError.IndividualDoesNotExist |
    AppError |
    Result<any>,
    Result<void> 
>