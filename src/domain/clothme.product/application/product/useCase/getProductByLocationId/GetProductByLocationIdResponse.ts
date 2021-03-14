import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { GetProductByLocationIdError } from "./GetProductByLocationIdError";


export type GetProductByLocationIdResponse = Either<
    GetProductByLocationIdError.LocationDoesNotExist |
    GetProductByLocationIdError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>