import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetIndividualByIndividualNameError } from "./GetIndividualByIndividualNameError";


export type GetIndividualByIndividualNameResponse = Either<
GetIndividualByIndividualNameError.IndividualDoesNotExist |
    AppError |
    Result<any>,
    Result<void> 
>