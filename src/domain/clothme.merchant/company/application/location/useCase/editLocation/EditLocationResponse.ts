import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { EditLocationError } from "./EditLocationError";



export type EditLocationResponse = Either<
    EditLocationError.LocationDoesNotExist |
    EditLocationError.NoPermission |
    AppError |
    Result<any>,
    Result<void> 
>