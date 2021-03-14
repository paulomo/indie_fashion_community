import { authService } from './util/Util';
import { Employee } from '../../clothme.merchant/company/domain/entity/employee/Employee';
import { EmployeeFirebaseService } from './EmployeeFirebaseService';
import { IFirebaseAuthRepository } from '../../clothme.merchant/company/domain/repository/auth/IFirebaseAuthRepository';

export class AuthFirebaseService implements IFirebaseAuthRepository {
  constructor() {
    // this.emaiLinkSignInConsumer = this.emaiLinkSignInConsumer.bind(this);
    // this.emaiLinkSignInMerchant = this.emaiLinkSignInMerchant.bind(this);
    this.signUpWithEmail = this.signUpWithEmail.bind(this);
    this.signInWithEmail = this.signInWithEmail.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  private employeeFirebaseService = new EmployeeFirebaseService();
  // private leadsFirebaseService = new LeadsFirebaseService();

  // public async emaiLinkSignInConsumer(data: IMerchantLeadsModel): Promise<any> {
  //   var actionCodeSettings = {
  //     // url: 'https://www.clothme.io/early-users-dashboard',
  //     url: 'http://localhost:3000/early-users-dashboard',
  //     handleCodeInApp: true,
  //   };
  //   try {
  //     const response = await authService.sendSignInLinkToEmail(
  //       data.brand.brandEmail,
  //       actionCodeSettings
  //     );
  //     window.localStorage.setItem('emailForSignIn', data.brand.brandEmail);
  //     try {
  //       const res = await this.leadsFirebaseService.addConsumerLead(data);
  //       return true;
  //     } catch (error) {
  //       console.log(error.message);
  //       return false;
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //     return false;
  //   }
  // }

  // public async emaiLinkSignInMerchant(data: IMerchantLeadsModel): Promise<any> {
  //   var actionCodeSettings = {
  //     // url: 'https://www.clothme.io/merchant/early-brand-merchant-dashboard',
  //     url: 'http://localhost:3000/merchant/early-brand-merchant-dashboard',
  //     handleCodeInApp: true,
  //   };
  //   try {
  //     const response = await authService.sendSignInLinkToEmail(
  //       data.brand.brandEmail,
  //       actionCodeSettings
  //     );
  //     try {
  //       const res = await this.leadsFirebaseService.addMerchantLead(data);
  //     } catch {}
  //     window.localStorage.setItem('emailForSignIn', data.brand.brandEmail);
  //   } catch {}
  // }

  // async authenticateMerchantWithEmailLink(): Promise<any> {
  //   if (authService.isSignInWithEmailLink(window.location.href)) {
  //     let email = window.localStorage.getItem('emailForSignIn');
  //     console.log(email);
  //     if (!email) {
  //       email = window.prompt('Please provide your email for confirmation');
  //     }
  //     try {
  //       let res = await authService.signInWithEmailLink(email as string, window.location.href);
  //       let id = res.user?.uid;
  //       let userEmail = res.user?.email;
  //       let dataToUpload = {
  //         email: userEmail,
  //         id: id,
  //       };
  //       try {
  //         const res = await this.leadsFirebaseService.updateMerchantLead(dataToUpload);
  //         return true;
  //       } catch (error) {
  //         console.log(error.message);
  //         return false;
  //       }
  //       window.localStorage.removeItem('emailForSignIn');
  //       return res.user;
  //     } catch (error) {
  //       return error.message;
  //     }
  //   }
  // }

  async signUpWithEmail(data: any): Promise<any> {
    try {
      const response = await authService.createUserWithEmailAndPassword(data.email, data.password);
      try {
        const user = await this.employeeFirebaseService.addEmployee(response.user);
        return user;
      } catch (error) {
        return error;
      }
    } catch (error) {
      return error;
    }
  }

  async signInWithEmail(data: any): Promise<any> {
    try {
      const response = await authService.signInWithEmailAndPassword(data.email, data.password);
      try {
        const userResponse = await this.employeeFirebaseService.getEmployeeByEmployeeId(response);
        return userResponse;
      } catch (error) {
        return error;
      }
    } catch (error) {
      return error;
    }
  }

  async resetPassword(data: any): Promise<Employee> {
    throw new Error('Method not implemented.');
  }

  async forgotPassword(data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async signOut(data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
