import { Mapper } from "../../../../../clothme.shared.kernel/infrastructure/mapper/Mapper";
import { EmailSignUpDTO } from "../../../application/employee/useCase/auth/emailSignUp/EmailSignUpDTO";
import { EmailSignInDTO } from "../../../application/employee/useCase/auth/emailSignIn/EmailSignInDTO";
import { ForgotPasswordDTO } from "../../../application/employee/useCase/auth/forgotPassword/ForgotPasswordDTO";
import { ResetPasswordDTO } from "../../../application/employee/useCase/auth/resetPassword/ResetPasswordDTO";
import { VerifyEmployeeDTO } from "../useCase/employee/verifyEmployee/VerifyEmployeeDTO";

export class EmployeeMapper implements Mapper<void> {

    public static toSignUp (raw: any) : EmailSignUpDTO {
       return {
        locationId: raw.locationId,
        companyId: raw.companyId,
        email: raw.email,
        password: raw.password,
        companyName: raw.companyName,
        locationName: raw.locationName,
        tier: raw.tier,
        signUpDate: raw.signUpDate,
        activityDate: raw.signUpDate
       }
    }

    public static toSignIn (raw: any) : EmailSignInDTO {
        return {
            email: raw.email,
            password: raw.password,
            activityDate: raw.dateSignedIn,
        }
    }

    public static toForgotPassword (raw: any) : ForgotPasswordDTO {
        return {
            locationId: raw.locationId,
            companyId: raw.companyId,
            employeeId: raw.employeeId,
            email: raw.email,
            activityDate: raw.dateSent
        }
    }

    public static toResetPassword (raw: any) : ResetPasswordDTO {
        return {
            companyId: raw.companyId,
            locationId: raw.locationId,
            employeeId: raw.employeeId,
            email: raw.email,
            currentPassword: raw.password,
            newPassword: raw.newPassword,
            currentDate: raw.currentDate,
            activityDate: raw.currentDate,
        }
    }

    public static toVerifyEmployee (raw: any) : VerifyEmployeeDTO {
        return {
          email: raw.email,
          employeeId: raw.employeeId,
          companyId: raw.companyId,
          locationId: raw.locationId,
          firstName: raw.firstName,
          lastName: raw.lastName,
          phoneNumber: raw.phoneNumber,
          position: raw.position,
          identity: raw.File,
          approvalLetter: raw.File,
          activityDate: raw.activityDate,
        };
    }


}