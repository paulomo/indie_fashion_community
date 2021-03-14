import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetBrandByBrandNameError } from "./GetBrandByBrandNameError";


export type GetBrandByBrandNameResponse = Either<
    GetBrandByBrandNameError.BrandDoesNotExist |
    GetBrandByBrandNameError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>