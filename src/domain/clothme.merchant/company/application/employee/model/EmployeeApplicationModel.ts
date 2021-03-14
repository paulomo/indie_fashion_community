
export class EmployeeApplicationModel {
    employeeId: string;
    firstname: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth?: string;
    locationId?: string;
    companyId?: string;
    employeeDuties?: EmployeeDutiesModel;
    employeeRoles?: EmployeeRolesModel

    constructor(
        id: string, 
        firstName: string, 
        lastName: string,
        email: string,
        phoneNumber: string,
        dateOfBirth?: string,
        locationId?: string,
        companyId?: string,
        duties?: EmployeeDutiesModel,
        roles?: EmployeeRolesModel
    ) {
        this.employeeId = id;
        this.firstname = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber
        this.dateOfBirth = dateOfBirth;
        this.locationId = locationId;
        this.companyId = companyId
    }
}

export class EmployeeDutiesModel {
    employeeId: string;
    product?: string[];
    sales?: string[];
    wallet?: string[];
    employee?: string[];
    customer?: string[];
    analytic?: string[];
    report?: string[]
    locationId?: string;
    companyId?: string;

    constructor(employeeId: string, product?: string[], sales?: string[], wallet?: string[], employee?: string[], 
        customer?: string[], analytic?: string[], report?: string[], locationId?: string, companyId?: string) {
            this.employeeId = employeeId;
            this.product = product;
            this.sales = sales;
            this.employee = employee;
            this.wallet = wallet;
            this.customer = customer;
            this.analytic = analytic;
            this.report = report;
            this.locationId = locationId;
            this.companyId = companyId;
    }
}

export class EmployeeRolesModel {
    employeeId: string;
    roles: string[];
    locationId?: string;
    companyId?: string;

    constructor(employeeId: string, roles: string[], locationId?: string, companyId?: string) {
        this.employeeId = employeeId;
        this.roles = roles;
        this.locationId = locationId;
        this.companyId = companyId; 
    }
}





















