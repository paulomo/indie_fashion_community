import { dbService } from './util/Util';
import { collectionConstant } from './config/DBConstant';
import { IEmployeeRepository } from '../../clothme.merchant/company/domain/repository/employee/IEmployeeRepository';
import { Employee } from '../../clothme.merchant/company/domain/entity/employee/Employee';
import { IDTO } from '../../clothme.shared.kernel/application/dto/Idto';
import { EmployeeMapper } from '../../clothme.merchant/company/application/employee/mapper/EmployeeMapper';
import { IFirebaseEmployeeRepository } from '../../clothme.merchant/company/domain/repository/employee/IFirebaseEmployeeRepository';

export class EmployeeFirebaseService implements IFirebaseEmployeeRepository {
  constructor() {
    this.addEmployee = this.addEmployee.bind(this);
    this.assignDuties = this.assignDuties.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.getAllEmployee = this.getAllEmployee.bind(this);
    this.getAllEmployeeByLocation = this.getAllEmployeeByLocation.bind(this);
    this.getEmployeeByEmployeeId = this.getEmployeeByEmployeeId.bind(this);
    this.getEmployeeByEmployeeName = this.getEmployeeByEmployeeName.bind(this);
    this.remove = this.remove.bind(this);
    this.removeDuties = this.removeDuties.bind(this);
    this.removeRole = this.removeRole.bind(this);
    this.terminateEmployee = this.terminateEmployee.bind(this);
    this.verifyEmployee = this.verifyEmployee.bind(this);
  }

  async assignRole(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async addEmployee(data: any): Promise<any> {
    return await dbService
      .collection(collectionConstant.company)
      .doc(data.companyId)
      .collection(collectionConstant.location)
      .doc(data.locationId)
      .collection(collectionConstant.employee)
      .doc(data.employeeId)
      .set(data);
  }

  async assignDuties(data: any): Promise<void> {
    let response = await dbService
      .collection(collectionConstant.company)
      .doc(data.companyId)
      .collection(collectionConstant.location)
      .doc(data.locationId)
      .collection(collectionConstant.employee)
      .doc(data.employeeId);
  }

  static async assignRoles(data: any): Promise<void> {
    return await dbService
      .collection(collectionConstant.company)
      .doc(data.companyId)
      .collection(collectionConstant.location)
      .doc(data.locationId)
      .collection(collectionConstant.employee)
      .doc(data.employeeId)
      .set(data);
  }

  async editEmployee(data: any): Promise<any> {
    return await dbService
      .collection(collectionConstant.company)
      .doc(data.companyId)
      .collection(collectionConstant.location)
      .doc(data.locationId)
      .collection(collectionConstant.employee)
      .doc(data.employeeId)
      .update(data);
  }

  async getAllEmployee(data: any) {
    return await dbService
      .collection(collectionConstant.company)
      .doc(data.companyId)
      .collection(collectionConstant.location)
      .doc(data.locationId)
      .collection(collectionConstant.employee)
      .get();
  }

  async getEmployeeByEmployeeId(data: any): Promise<any> {
    let employee: Employee;
    try {
      let result = await dbService
        .collection(collectionConstant.company)
        .doc(data.companyId)
        .collection(collectionConstant.location)
        .doc(data.locationId)
        .collection(collectionConstant.employee)
        .doc(data.employeeId)
        .get();
      if (result.exists) {
        employee = EmployeeMapper.toDomain(result.data()).getValue();
        return employee;
      }
    } catch (error) {
      return error;
    }
  }

  async getAllEmployeeByLocation(data: any): Promise<[]> {
    throw new Error('Method not implemented.');
  }

  async getEmployeeByEmployeeName(data: any): Promise<any> {
    let response = await dbService
      .collection(collectionConstant.company)
      .doc(data.companyId)
      .collection(collectionConstant.location)
      .doc(data.locationId)
      .collection(collectionConstant.employee)
      .where('firstName', '==', data.firstName)
      .get();
  }

  async removeDuties(data: any) {
    return await dbService
      .collection(collectionConstant.company)
      .doc(data.companyId)
      .collection(collectionConstant.location)
      .doc(data.locationId)
      .collection(collectionConstant.employee)
      .doc(data.employeeId)
      .update(data);
  }

  async removeRole(data: any): Promise<any> {
    var result = await dbService
      .collection(collectionConstant.company)
      .doc(data.companyId)
      .collection(collectionConstant.location)
      .doc(data.locationId)
      .collection(collectionConstant.employee)
      .doc(data.employeeId)
      .get(data);

    if (result.exists) return result.data();
  }

  async terminateEmployee(data: any): Promise<void> {
    return await dbService
      .collection(collectionConstant.company)
      .doc(data.companyId)
      .collection(collectionConstant.location)
      .doc(data.locationId)
      .collection(collectionConstant.employee)
      .doc(data.employeeId)
      .update(data);
  }

  async assignRoles(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async remove(data: IDTO): Promise<Employee> {
    throw new Error('Method not implemented.');
  }

  async verifyEmployee(data: any) {
    var employee = dbService.collection(collectionConstant.company);
  }
}
