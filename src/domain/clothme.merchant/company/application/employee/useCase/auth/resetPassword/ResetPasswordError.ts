import { Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../../clothme.shared.kernel/error/UseCaseError";


export class EmployeeEmailDoesNotExist extends Result<UseCaseError> {
  constructor() {
    super(false, {
      message: `Employee email does not exist.`,
    } as UseCaseError);
  }
}

export class SamePassword extends Result<UseCaseError> {
  constructor() {
    super(false, {
      message: `Password is same`,
    } as UseCaseError);
  }
}