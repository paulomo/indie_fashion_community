import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { RemoveLocationError } from "./RemoveLocationError";


export type RemoveLocationResponse = Either<
    RemoveLocationError.LocationDoesNotExist |
    RemoveLocationError.LocationAlreadyRemoved |
    AppError |
    Result<any>,
    Result<void> 
>