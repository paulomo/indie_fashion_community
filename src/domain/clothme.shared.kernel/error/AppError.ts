import { Result } from "./Result";
import { UseCaseError } from "./UseCaseError";

export class AppError extends Result<UseCaseError> {
  public constructor(error: any) {
    super(false, {
      message: ``,
      error: error,
    } as UseCaseError);
  }

  public static Create(error: any): AppError {
    return new AppError(error);
  }
}