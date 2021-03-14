import { EmailSignUpResponse } from "../../domain/clothme.merchant/company/application/employee/useCase/auth/emailSignUp/EmailSignUpResponse";

export interface AppState {
  signUpState: ISignUpState;
  companyState: CompanyState;
  locationState: LocationState;
  brandState: BrandState;
  employeeState: IEmployeeState;
  productState: ProductState;
  accountState: AccountState;
  promotion: Promotion;
  shippingState: ShippingState;
  orderState: OrderState;
  customerServiceState: CustomerServiceState;
  salesReportState: SaleReportState;
  customerReportState: CustomerReportState;
  productReportState: ProductReportState;
}
export interface ISignUpState {
  loadingStatus: ApiStatus.LOADING;
  addingStatus: ApiStatus.LOADED;
  isSuccess: boolean;
  errorMessage: string;
}

export interface CompanyState {
  companyId: string;
  companyName: string;
  locations: [];
  brands: [];
  companyContact: [{}];
  removed: boolean;
}

export interface LocationState {
  locationId: string;
  locationName: string;
  locationAddress: {};
  companyId: string;
  locationLogo?: string;
  locationContact: [{}];
  published: boolean;
  removed: boolean;
}

export interface BrandState {
  brandId: string;
  brandName: string;
  brandGender: string;
  companyId: string;
  brandLogo?: string;
  brandDemography?: string;
  brandLaunchDate?: string;
  locationId?: string;
  brandContact: [{}];
  published: boolean;
  removed: boolean;
}

export interface IEmployeeState {
  employeeId: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth?: string;
  locationId?: string;
  companyId?: string;
  employeeDuties?: [{}];
  employeeRoles?: [{}];
  terminated: boolean;
  suspended: boolean;
  token: string;
  success: boolean;
}

export interface ProductState {
  productId: string;
  productName: string;
  productDescription: string;
  defaultImage: string;
  productImages: [string];
  gender: string;
  measurement: {};
  price: number;
  discount: [{}];
  productCategory: string;
  productCatergoryType: string;
  fabric: string;
  returns: string;
  delivery: string;
  tax: number;
  likeCount?: number;
  reviews?: [{}];
  averageReview: number;
  reviewCount: number;
  published: boolean;
  removed: boolean;
}

export interface AccountState {}

export interface Promotion {}

export interface ShippingState {}

export interface OrderState {}

export interface CustomerServiceState {}

export interface SaleReportState {}

export interface CustomerReportState {}

export interface ProductReportState {}

export enum ApiStatus {
  LOADING = 'loading',
  LOADED = 'loaded',
  FAILED = 'failed',
}
