import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { GetProductByProductIdError } from "./GetProductByProductIdError";


export type GetProductByProductIdResponse = Either<
    GetProductByProductIdError.ProductDoesNotExist |
    GetProductByProductIdError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>