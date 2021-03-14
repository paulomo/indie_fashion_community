
export class CompanyApplicationModel {
    companyName: string;
    companyTier: string;
    establishedDate?: string;
    streetAddress?: StreetAddressApplicationModel;

    constructor(
        companyName: string,
        companyTier: string,
        establishedDate?: string,
        streetAddress?: StreetAddressApplicationModel 
    ) {
        this.companyName = companyName
        this.companyTier = companyTier
        this.establishedDate = establishedDate
        this.streetAddress = streetAddress
    }
}

export class StreetAddressApplicationModel {
    streetNumber: number;
    streetName: string;

    constructor(
        streetNumber: number,
        streetName: string
    ) {
        this.streetNumber = streetNumber
        this.streetName = streetName
    }
}