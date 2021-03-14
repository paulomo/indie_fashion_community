import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { GetProductByBrandIdError } from "./GetProductByBrandIdError";


export type GetProductByBrandIdResponse = Either<
    GetProductByBrandIdError.BrandDoesNotExist |
    GetProductByBrandIdError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>