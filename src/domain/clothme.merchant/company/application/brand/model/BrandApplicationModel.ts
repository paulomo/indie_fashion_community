
export class BrandApplicationModel {
    brandName: string;
    brandGender: string;
    companyId: string
    brandLogo?: string;
    brandDemography?: string;
    brandLaunchDate?: string;
    locationId?: string;

    constructor(
        brandName: string,
        brandGender: string,
        companyId: string,
        brandLogo?: string,
        brandDemography?: string,
        brandLaunchDate?: string,
        locationId?: string
    ) {
        this.brandName = brandName
        this.brandGender = brandGender
        this.companyId = companyId
        this.brandLogo = brandLogo
        this.brandDemography = brandDemography
        this.brandLaunchDate = brandLaunchDate
        this.locationId = locationId
    }
}