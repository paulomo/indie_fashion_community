import { IRepository } from "../../../../../clothme.shared.kernel/domain/repository/IRepository";
import { Employee } from "../../entity/employee/Employee";



export interface IAuthRepository {
    signUpWithEmail (data: any) : Promise<any>;
    signInWithEmail (data: any) : Promise<Employee>;
    resetPassword (data: any) : Promise<Employee>;
    forgotPassword (data: any) : Promise<void>;
    signOut (data: any) : Promise<void>;
}