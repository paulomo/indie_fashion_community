import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { RemoveProductError } from "./RemoveProductError";


export type RemoveProductResponse = Either<
    RemoveProductError.ProductDoesNotExist |
    RemoveProductError.ProductAlreadyRemoved |
    RemoveProductError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>