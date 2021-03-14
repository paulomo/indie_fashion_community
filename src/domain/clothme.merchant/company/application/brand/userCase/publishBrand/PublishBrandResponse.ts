import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { PublishBrandError } from "./PublishBrandError";


export type PublishBrandResponse = Either<
    PublishBrandError.BrandAlreadyPublished |
    PublishBrandError.BrandDoesNotExist |
    PublishBrandError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>