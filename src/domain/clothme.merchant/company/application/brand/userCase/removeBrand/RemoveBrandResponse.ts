import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { RemoveBrandError } from "./RemoveBrandError";


export type RemoveBrandResponse = Either<
    RemoveBrandError.BrandAlreadyRemoved |
    RemoveBrandError.BrandDoesNotExist |
    RemoveBrandError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>