import { ICompanyRepository } from "../../../domain/repository/company/ICompanyRepository";
import { Company } from "../../../domain/entity/company/Company";
import { GetCompanyByCompanyIdDTO } from "../../../application/company/useCase/getCompanyByCompanyId/GetCompanyByCompanyIdDTO"
import { EditCompanyDTO } from "../../../application/company/useCase/editCompany/EditCompanyDTO";
import { PauseCompanyOperationDTO } from "../../../application/company/useCase/pauseCompanyOperation/PauseCompanyOperationDTO"; 
import { RemoveCompanyDTO } from "../../../application/company/useCase/removeCompany/RemoveCompanyDTO";
import { Api } from "../../../../../clothme.shared.kernel/infrastructure/http/Api";
import { CompanyEndpoint } from "../endpoint/CompanyEndpoint";
import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";


export class CompanyRepository  extends Api implements ICompanyRepository {

    public constructor() {
        super(); 
        this.editCompany = this.editCompany.bind(this);
        this.getCompanyByCompanyId = this.getCompanyByCompanyId.bind(this);
        this.pauseCompanyOperation = this.pauseCompanyOperation.bind(this);
        this.remove = this.remove.bind(this);
    }

    public async editCompany(data: EditCompanyDTO): Promise<Company> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: CompanyEndpoint.EDIT_COMPANY + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }

    public async getCompanyByCompanyId(data: GetCompanyByCompanyIdDTO): Promise<Company> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: CompanyEndpoint.GET_COMPANY_BY_COMPANY_ID + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
            
        } catch (error) {
            return error
        }
    }

    public async pauseCompanyOperation(data: PauseCompanyOperationDTO): Promise<void> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: CompanyEndpoint.PAUSE_COMPANY_OPERATION + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }

    public async remove(data: RemoveCompanyDTO): Promise<Company> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: CompanyEndpoint.REMOVE_COMPANY + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
            
        } catch (error) {
            return error
        }
    }

    public async getCompanyByCompanyName(data: GetCompanyByCompanyIdDTO): Promise<Company> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: CompanyEndpoint.GET_COMPANY_BY_COMPANY_NAME + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
            
        } catch (error) {
            return error
        }
    }
}