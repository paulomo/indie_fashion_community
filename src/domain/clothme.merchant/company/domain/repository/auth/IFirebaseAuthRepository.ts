
export interface IFirebaseAuthRepository {
    // emaiLinkSignInConsumer (data: any) : Promise<any>;
    // emaiLinkSignInMerchant (data: any) : Promise<any>;
    signUpWithEmail (data: any) : Promise<any>;
    signInWithEmail (data: any) : Promise<any>;
    resetPassword (data: any) : Promise<any>;
    forgotPassword (data: any) : Promise<any>;
    signOut (data: any) : Promise<any>;
}