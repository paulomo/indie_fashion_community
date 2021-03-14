import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { EditProductError } from "./EditProductError";


export type EditProductResponse = Either<
    EditProductError.ProductDoesNotExist |
    EditProductError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>