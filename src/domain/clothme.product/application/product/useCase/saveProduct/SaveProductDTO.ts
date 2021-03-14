import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";
import { ICompanyDTO } from "../../../../../clothme.shared.kernel/application/dto/ICompanyDTO";


export interface SaveProductDTO extends IDTO, ICompanyDTO {
    productId: string;
    productImage: string[];
    productName: string;
    gender: string;
    description: string;
    measurement: {};
    price: number;
    discount: number;
    productCategory: string;
    productCatergoryType: string;
    fabric: string;
    returns: string;
    delivery: string;
    tax: number;
    likeCount?: number;
    reviews?: {};
    averageReview: number;
    reviewCount: number;
    employeeId: string;
    savedDate: string;
}