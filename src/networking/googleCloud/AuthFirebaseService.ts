import { authService } from './util/Util';
import { AccountFirebaseService } from './AccountFirebaseService';

export class AuthFirebaseService {
  constructor() {
    this.signUpWithEmail = this.signUpWithEmail.bind(this);
    this.signInWithEmail = this.signInWithEmail.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  async signUpWithEmail(data: any) {
    const userService = new AccountFirebaseService();
    try {
      const response = await authService.createUserWithEmailAndPassword(data.email, data.password);
      try {
        console.log(response.user);
        const user = await userService.useSaveDataToAccount(response.user);
        console.log(user);
        return user;
      } catch (error) {
        console.log(error.message);
        return error;
      }
    } catch (error) {
      var errorCode = error.code;
      if (errorCode == 'auth/weak-password') {
        throw new Error('The password is too weak.');
      }
      if (errorCode == 'auth/email-already-in-use') {
        throw new Error('The email address is already in use by another account.');
      }
      if (errorCode == 'auth/account-exists-with-different-credential') {
        throw new Error('The email already exist.');
      }
      if (errorCode == 'auth/invalid-email') {
        throw new Error('The email address is not valid.');
      }
      if (errorCode == 'auth/operation-not-allowed') {
        throw new Error('Email signup is not enabled.');
      }
    }
  }

  async signInWithEmail(data: any): Promise<any> {
    try {
      const response = await authService.signInWithEmailAndPassword(data.email, data.password);
      return response.user;
    } catch (error) {
      return error;
    }
  }

  async resetPassword(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async forgotPassword(data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async signOut(data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
