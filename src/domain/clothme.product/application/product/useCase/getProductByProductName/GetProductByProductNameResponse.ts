import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { GetProductByProductNameError } from "./GetProductByProductNameError";


export type GetProductByProductNameResponse = Either<
    GetProductByProductNameError.ProductDoesNotExist |
    GetProductByProductNameError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>