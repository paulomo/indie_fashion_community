
export class IndividualApplicationModel {
    individualName: string;
    email: string;
    phoneNumber: string;
    address: IndividualAddressApplicationModel;
    startDate?: string;
    tier: string;

    constructor(
        individualName: string,
        email: string,
        phoneNumber: string,
        address: IndividualAddressApplicationModel,
        tier: string,
        startDate?: string
    ) {
        this.individualName = individualName
        this.email = email
        this.phoneNumber = phoneNumber
        this.address = address
        this.startDate = startDate
        this.tier = tier
    }
}

export class IndividualAddressApplicationModel {
    city?: string;
    stateOrProvince?: string;
    country?: string;
 
    constructor(
        city?: string,
        stateOrProvince?: string,
        country?: string
    ) {
        this.city = city
        this.stateOrProvince = stateOrProvince
        this.country = country
    }
}