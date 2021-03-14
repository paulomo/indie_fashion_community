import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { RemoveCompanyError } from "./RemoveCompanyError";


export type RemoveCompanyResponse = Either<
    RemoveCompanyError.CompanyDoesNotExist |
    RemoveCompanyError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>