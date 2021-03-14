import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { GetProductByCompanyIdError } from "./GetProductByCompanyIdError";


export type GetProductByCompanyIdResponse = Either<
    GetProductByCompanyIdError.CompanyDoesNotExist |
    GetProductByCompanyIdError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>