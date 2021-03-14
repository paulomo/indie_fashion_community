import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { GetCompanyByCompanyIdError } from "./GetCompanyByCompanyIdError";


export type GetCompanyByCompanyIdResponse = Either<
    GetCompanyByCompanyIdError.CompanyDoesNotExist |
    GetCompanyByCompanyIdError.AccessDenied |
    AppError |
    Result<any>,
    Result<void> 
>