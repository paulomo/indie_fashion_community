import { Result } from "../../../../../../../clothme.shared.kernel/error/Result";
import { UseCaseError } from "../../../../../../../clothme.shared.kernel/error/UseCaseError";

export class EmailDoesNotExist extends Result<UseCaseError> {
  constructor() {
    super(false, {
      message: `Email does not exist.`,
    } as UseCaseError);
  }
}

export class EmailIsInvalid extends Result<UseCaseError> {
  constructor() {
    super(false, {
      message: `Email is invalid`,
    } as UseCaseError);
  }
}
