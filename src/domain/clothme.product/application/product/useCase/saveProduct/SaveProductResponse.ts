import {Either, Result } from "../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../clothme.shared.kernel/error/AppError";
import { SaveProductError } from "./SaveProductError";


export type SaveProductResponse = Either<
    SaveProductError.ProductDoesNotExist |
    SaveProductError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>