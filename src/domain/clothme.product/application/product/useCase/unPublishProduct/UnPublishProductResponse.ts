import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { UnPublishProductError } from "./UnPublishProductError";


export type UnPublishProductResponse = Either<
    UnPublishProductError.ProductDoesNotExist |
    UnPublishProductError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>