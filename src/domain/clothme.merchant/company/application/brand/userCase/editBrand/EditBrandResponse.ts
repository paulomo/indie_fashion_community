import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { EditBrandError } from "./EditBrandError";


export type EditBrandResponse = Either<
    EditBrandError.BrandAlreadyExist |
    EditBrandError.NeedPermission |
    AppError |
    Result<any>,
    Result<void> 
>
