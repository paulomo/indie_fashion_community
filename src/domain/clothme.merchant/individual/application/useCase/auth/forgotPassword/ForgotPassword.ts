import { IUseCase } from "../../../../../../clothme.shared.kernel/application/useCase/IUseCase";
import { ForgotPasswordDTO } from "./ForgotPasswordDTO";
import { ForgotPasswordResponse } from "./ForgotPasswordResponse";


export class ForgotPassword implements IUseCase<ForgotPasswordDTO, Promise<ForgotPasswordResponse>>{

    execute(request?: ForgotPasswordDTO | undefined): Promise<ForgotPasswordResponse> {
        throw new Error("Method not implemented.");
    }

}