
export class LocationApplicationModel {
    locationName: string;
    locationAddress: LocationAddressApplicationModel;
    companyId: string;
    locationLogo?: string;

    constructor(
        locationName: string,
        locationAddress: LocationAddressApplicationModel,
        companyId: string,
        locationLogo?: string
    ) {
        this.locationName = locationName
        this.locationAddress = locationAddress
        this.companyId = companyId
        this.locationLogo = locationLogo
    }
}

export class LocationAddressApplicationModel {
    city: string;
    provinceOrState: string;
    country: string

    constructor(
        city: string,
        provinceOrState: string,
        country: string
    ) {
        this.city = city
        this.provinceOrState = provinceOrState
        this.country = country
    }
}