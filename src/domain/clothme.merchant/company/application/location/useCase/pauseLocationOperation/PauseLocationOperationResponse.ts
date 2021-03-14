import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { PauseLocationOperationError } from "./PauseLocationOperationError";


export type PauseLocationOperationResponse = Either<
    PauseLocationOperationError.LocationAlreadyPaused |
    PauseLocationOperationError.LocationDoesNotExist |
    AppError |
    Result<any>,
    Result<void> 
>