export default {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  CUSTOMER: 'CUSTOMER',
  GUEST: 'GUEST',
};

// export enum Roles {
//   headOfficeMainAdmin = 'headOfficeMainAdmin',
//   headOfficeAdmin = 'headOfficeAdmin',
//   headOfficeExec = 'headOfficeExec',
//   locationMainAdmin = 'locationMainAdmin',
//   locationAdmin = 'locationAdmin',
//   locationExec = 'locationExec',
//   ownerIndividual = 'ownerIndividual',
// }

// export enum Duties {
//   // PRODUCT
//   addProduct = 'addProduct',
//   readProduct = 'readProduct',
//   removeProduct = 'removeProduct',
//   editProduct = ' editProduct',
//   publishProduct = 'publishProduct',
//   unPublishProduct = 'unPublishProduct',
//   allProductDuties = 'allProductDuties',

//   // EMPLOYEE
//   addEmployee = 'addEmployee',
//   suspendEmployee = 'suspendEmployee',
//   assignDuties = 'assignDuties',
//   assignRoles = 'assignRoles',
//   readEmployee = 'readEmployee',
//   allEmployeeDuties = 'allEmployeeDuties',

//   // SALE
//   readSales = 'readSales',
//   allSaleDuties = 'allSaleDuties',

//   //CUSTOMER
//   replyCustomer = 'replyCustomer',
//   blockCustomer = 'blockCustomer',
//   allCustomerDuties = 'allCustomerDuties',

//   // WALLET
//   readWallet = 'readWallet',
//   addFund = 'addFund',
//   sendFunds = 'sendFunds',
//   editWallet = 'editWallet',
//   allWalletDuties = 'allWalletDuties',

//   // REPORT
//   readReport = 'readReport',
//   shareReport = 'shareReport',
//   emailReport = 'emailReport',
//   downloadReport = 'downloadReport',
//   allReportWallet = 'allReportWallet',

//   // ANALYTICS
//   readAnalytic = 'readAnalytic',
//   shareAnalytics = 'shareAnalytics',
//   emailAnalytics = 'emailAnalytics',
//   downloadAnalytic = 'downloadAnalytic',
//   allAnalyticDuties = 'allAnalyticDuties',
// }

// export const employeeRoles = {
//   product: [String(Roles.headOfficeAdmin)],
//   wallet: [
//     String(Roles.headOfficeMainAdmin),
//     String(Duties.allWalletDuties),
//     String(Duties.readWallet)
//   ],
//   sales: [
//     String(Roles.headOfficeMainAdmin),
//     String(Roles.headOfficeAdmin),
//     String(Roles.locationMainAdmin),
//     String(Roles.headOfficeAdmin),
//     String(Duties.allSaleDuties)
//   ],
//   employee: [String(Roles.headOfficeAdmin)],
//   report: [String(Roles.headOfficeAdmin)],
//   analytics: [String(Roles.headOfficeAdmin)],
//   all: [String(Roles.headOfficeAdmin), String(Roles.headOfficeExec), String(Roles.headOfficeMainAdmin), String(Roles.locationAdmin)],
// };
