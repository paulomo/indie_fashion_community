import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { PublishProductError } from "./PublishProductError";


export type PublishProductResponse = Either<
    PublishProductError.ProductAlreadyPublished |
    PublishProductError.ProductDoesNotExist |
    PublishProductError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>