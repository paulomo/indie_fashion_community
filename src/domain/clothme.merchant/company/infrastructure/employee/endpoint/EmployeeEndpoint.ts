export const UserEndpoint = {
    ADD_EMPLOYEE: "add_employee/",
    GET_EMPLOYEE_ID: `get_employee/`,
    GET_EMPLOYEE_NAME: `get_employee/:employeeId/:companyId/:locationId`,
    GET_EMPLOYEES: `get_employee/:employeeId/:companyId/:locationId`,
    TERMINATE_EMPLOYEE: `terminate_employee/:adminId/:employeeId`,
    REMOVE_EMPLOYEE_DUTY: `remove_duties_employee/:adminId/:employeeId`,
    REMOVE_EMPLOYEE_ROLE: `remove_role_employee/:adminId/:employeeId`,
    ADD_DUTIES: `add_duties_employee/:adminId/:employeeId`,
    ADD_ROLES: `add_role_employee/:adminId/:employeeId`,
    UPDATE_EMPLOYEE: `update_employee/`,
    SAVE_EMPLOYEE: `save_employee`
}

export const AuthEndpoint = {
    RESET_PASSWORD: "reset_password",
    FORGOT_PASSWORD: "forgot_password",
    SIGN_IN_WITH_EMAIL: "sign_in_with_email",
    SIGN_UP_WITH_EMAIL: "sign_up_with_email",
    FACEBOOK_SIGN_IN: "facebook_sign_in",
    GOOGLE_SIGN_IN: "google_sign_in",
    SIGN_OUT: "/sign_out",
}