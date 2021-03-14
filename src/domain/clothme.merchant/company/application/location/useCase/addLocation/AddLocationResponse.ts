import {Either, Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../clothme.shared.kernel/error/AppError";
import { AddLocationError } from "./AddLocationError";


export type AddLocationResponse = Either<
    AddLocationError.LocationAlreadyExist |    
    AddLocationError.NoPermission |
    AppError |
    Result<any>,
    Result<void> 
>