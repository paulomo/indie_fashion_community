import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetLocationByLocationIdError } from "./GetLocationByLocationIdError";


export type GetLocationByLocationIdResponse = Either<
    GetLocationByLocationIdError.LocationDoesNotExist |
    GetLocationByLocationIdError.NoPermission |
    AppError |
    Result<any>,
    Result<void> 
>