import { IDTO } from "../../../../../../clothme.shared.kernel/application/dto/Idto";


export interface AddIndividualDTO extends IDTO {
    individualId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    age: number;
    email: string;
    password: string;
    streetAddress: string;
    country: string;
    phoneNumber: string;
}