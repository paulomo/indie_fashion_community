import { IUseCase } from '../../../../../../../clothme.shared.kernel/application/useCase/IUseCase';
import { EmailSignUpDTO } from './EmailSignUpDTO';
import { EmailSignUpResponse } from './EmailSignUpResponse';
import { IAuthRepository } from '../../../../../domain/repository/auth/IAuthRepository';

// Employee Import
import { EmployeeEmail } from '../../../../../domain/value_object/employee/EmployeeEmail';
import { EmployeePassword } from '../../../../../domain/value_object/employee/EmployeePassword';

// Company inport
import { CompanyName } from '../../../../../domain/value_object/company/CompanyName';

// Location Import
import { LocationName } from '../../../../../domain/value_object/location/LocationName';
import { left, right, Result } from '../../../../../../../clothme.shared.kernel/error/Result';
import { AppError } from '../../../../../../../clothme.shared.kernel/error/AppError';
import { IFirebaseAuthRepository } from '../../../../../domain/repository/auth/IFirebaseAuthRepository';

export class EmailSignUp implements IUseCase<EmailSignUpDTO, Promise<EmailSignUpResponse>> {
  private authRepo: IAuthRepository | IFirebaseAuthRepository;

  constructor(authRepo: IAuthRepository | IFirebaseAuthRepository) {
    this.authRepo = authRepo;
  }

  public async execute(request: EmailSignUpDTO): Promise<EmailSignUpResponse> {
    const employeeEmailOrError = EmployeeEmail.create({ value: request.email });
    const employeePasswordOrError = EmployeePassword.create({ value: request.password });

    const employeeCombinedPropsResult = Result.combine([
      employeeEmailOrError,
      employeePasswordOrError,
    ]);
    if (employeeCombinedPropsResult.isFailure) return left(employeeCombinedPropsResult.error);

    // const companyIdOrError = CompanyId.create(new Guid(request.companyId));
    const companyNameOrError = CompanyName.create({ value: request.companyName });

    const companyCombinedPropsResult = Result.combine([companyNameOrError]);
    if (companyCombinedPropsResult.isFailure) return left(companyCombinedPropsResult.error);

    // const locationIdOrError = LocationId.create(new Guid(request.locationId));
    const locationNameOrError = LocationName.create({ value: request.locationName });

    const locationCombinedPropsResult = Result.combine([locationNameOrError]);
    if (locationCombinedPropsResult.isFailure) return left(locationCombinedPropsResult.error);

    try {
      const response = await this.authRepo.signUpWithEmail(request);
      return right(Result.Ok<any>(response));
    } catch (error) {
      return left(AppError.Create(error));
    }
  }
}
