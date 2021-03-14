import { IDuties } from "./IDuties";
import ValueObject from "../../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../../clothme.shared.kernel/error/Guard";



interface ProductDutiesProps { 
    given: string[]; // options: add, remove, update, read, pause 
}

export class ProductDuties extends ValueObject<ProductDutiesProps> implements IDuties {

    private constructor(duty: string[], props: ProductDutiesProps) {
        super(props)
        props.given.concat(duty)
    }

    public static set (duty: string[], props: ProductDutiesProps) : Result<ProductDuties> {
        const dutyNotEmpty = duty.length < 0;
        if (!dutyNotEmpty) {
            return Result.Fail<ProductDuties>('')
        }

        const dutyNotNull = Guard.AgainstNullOrUndefinded(duty, 'duty');
        if (!dutyNotNull.succeeded) {
            return Result.Fail<ProductDuties>(dutyNotNull.message)
        }

        return Result.Ok<ProductDuties>(new ProductDuties(duty, props))
    }
}