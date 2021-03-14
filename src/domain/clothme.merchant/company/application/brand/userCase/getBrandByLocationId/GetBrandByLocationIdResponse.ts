import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetBrandByLocationIdError } from "./GetBrandByLocationIdError";


export type GetBrandByLocationIdResponse = Either<
    GetBrandByLocationIdError.BrandDoesNotExist |
    GetBrandByLocationIdError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>