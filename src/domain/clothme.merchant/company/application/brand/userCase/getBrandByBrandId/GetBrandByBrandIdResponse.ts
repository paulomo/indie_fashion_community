import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetBrandByBrandIdError } from "./GetBrandByBrandIdError";


export type GetBrandByBrandIdResponse = Either<
    GetBrandByBrandIdError.BrandDoesNotExist |
    GetBrandByBrandIdError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>