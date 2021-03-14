import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { UnPublishBrandError } from "./UnPublishBrandError";


export type UnPublishBrandResponse = Either<
    UnPublishBrandError.BrandAlreadyUnPublished |
    UnPublishBrandError.BrandDoesNotExist |
    AppError |
    Result<any>,
    Result<void> 
>