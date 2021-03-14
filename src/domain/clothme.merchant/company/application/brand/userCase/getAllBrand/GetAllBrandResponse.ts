import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetAllBrandError } from "./GetAllBrandError";


export type GetAllBrandResponse = Either<
    GetAllBrandError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>