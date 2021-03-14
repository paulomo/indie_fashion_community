import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetLocationByLocationNameError } from "./GetLocationByLocationNameError";


export type GetLocationByLocationNameResponse = Either<
    GetLocationByLocationNameError.LocationDoesNotExist |
    GetLocationByLocationNameError.NoPermission |
    AppError |
    Result<any>,
    Result<void> 
>