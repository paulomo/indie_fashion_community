import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { LaunchLocationError } from "./LaunchLocationError";


export type LaunchLocationResponse = Either<
    LaunchLocationError.LocationDoesNotExist |
    LaunchLocationError.NoPermission |
    AppError |
    Result<any>,
    Result<void> 
>