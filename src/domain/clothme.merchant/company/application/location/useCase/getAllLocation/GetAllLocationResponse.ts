import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetAllLocationError } from "./GetAllLocationError";


export type GetAllLocationResponse = Either<
    GetAllLocationError.LocationDoesNotExist |
    GetAllLocationError.NoPermission |
    AppError |
    Result<any>,
    Result<void> 
>