import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { AddBrandError } from "./AddBrandError";


export type AddBrandResponse = Either<
    AddBrandError.BrandAlreadyExist |
    AddBrandError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>