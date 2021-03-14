import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { GetProductByBrandNameError } from "./GetProductByBrandNameError";


export type GetProductByBrandNameResponse = Either<
    GetProductByBrandNameError.BrandDoesNotExist |
    GetProductByBrandNameError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>