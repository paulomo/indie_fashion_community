import { Api } from "../../../../../clothme.shared.kernel/infrastructure/http/Api";
import { IAuthRepository } from "../../../domain/repository/auth/IAuthRepository";
import { Employee } from "../../../domain/entity/employee/Employee";
import { EmailSignInDTO } from "../../../application/employee/useCase/auth/emailSignIn/EmailSignInDTO";
import { EmailSignUpDTO } from "../../../application/employee/useCase/auth/emailSignUp/EmailSignUpDTO";
import { ForgotPasswordDTO } from "../../../application/employee/useCase/auth/forgotPassword/ForgotPasswordDTO";
import { ResetPasswordDTO } from "../../../application/employee/useCase/auth/resetPassword/ResetPasswordDTO";
import { EmployeeMapper } from "../../../application/employee/mapper/EmployeeMapper";
import { AuthEndpoint } from "../endpoint/EmployeeEndpoint";


export class AuthRepositoryImpl extends Api implements IAuthRepository {

    public constructor() {
        super();
        this.signUpWithEmail = this.signUpWithEmail.bind(this);
        this.signInWithEmail = this.signInWithEmail.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    public async signUpWithEmail(data: EmailSignUpDTO): Promise<void> {
 
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: AuthEndpoint.SIGN_UP_WITH_EMAIL,
                                data: JSON.stringify(data)
                            })
            const result = response.data;
            return result;
        }catch(error) {
            return error
        }
    }

    public async signInWithEmail(data: EmailSignInDTO): Promise<Employee> {

        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: AuthEndpoint.SIGN_IN_WITH_EMAIL,
                                data: JSON.stringify(data)
                            })
            const result = response.data;
            const employee = EmployeeMapper.toDomain(result);
            return employee.getValue();
        }catch(error) {
            return error
        }
    }

    public async resetPassword(data: ResetPasswordDTO): Promise<Employee> {

        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: AuthEndpoint.RESET_PASSWORD,
                                data: JSON.stringify(data)
                            })
            const result = response.data;
            return result;
        }catch(error) {
            return error
        }
    }

    public async forgotPassword(data: ForgotPasswordDTO): Promise<void> {

        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: AuthEndpoint.FORGOT_PASSWORD,
                                data: JSON.stringify(data)
                            })
            const result = response.data;
            return result;
        }catch(error) {
            return error
        }
    }

    public async signOut(data: any): Promise<void> {

        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: AuthEndpoint.SIGN_IN_WITH_EMAIL,
                                data: JSON.stringify(data)
                            })
            const result = response.data;
            return result;
        }catch(error) {
            return error
        }
    }

}