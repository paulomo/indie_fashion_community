import {Either, Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { AppError } from "../../../../../../../clothme.shared.kernel/error/AppError";
import { EmailSignInError } from "./EmailSignInError";
import { EmployeeApplicationModel } from "../../../model/EmployeeApplicationModel";


export type EmailSignInResponse = Either<
    EmailSignInError.EmailDoesNotExist |
    EmailSignInError.EmailIsIncorrect |
    EmailSignInError.PasswordIsIncorrect |
    AppError,
    Result<EmailSignInResponseDTO>
>


export interface EmailSignInResponseDTO {
    employee: EmployeeApplicationModel
}