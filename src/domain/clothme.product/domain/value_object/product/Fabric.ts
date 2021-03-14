import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface FabricProps {
    type: string;
}

export class Fabric extends ValueObject<FabricProps> {

    private constructor (props: FabricProps) {
        super(props);
    }
    
    public static create (props: FabricProps) : Result<Fabric> {
        const fabricNotNullorUndefined = Guard.AgainstNullOrUndefinded(props.type, 'fabricType');
        if (!fabricNotNullorUndefined.succeeded) {
            return Result.Fail<Fabric>(fabricNotNullorUndefined.message);
        }

        const fabricNotEmpty = Guard.AgainstEmpty(props.type, 'fabricType');
        if (!fabricNotEmpty.succeeded) {
            return Result.Fail<Fabric>(fabricNotEmpty.message);
        }

        return Result.Ok<Fabric>(new Fabric(props));
    }

    public change (newFabric: string, props: FabricProps) : Result<Fabric> {
        const resultFabricInput = this.checkFabricInputIsNotEmptyOrNull(newFabric).getValue()
        if (Result.Ok<string>(resultFabricInput)) {
            return Result.Ok<Fabric>(new Fabric({type: resultFabricInput}))
        }
        return Result.Fail<Fabric>(resultFabricInput)
    }

    get type () {
        return this.props.type;
    }

    private checkFabricInputIsNotEmptyOrNull (fabricInput: string) : Result<string> {
        const fabricNotNullorUndefined = Guard.AgainstNullOrUndefinded(fabricInput, 'fabricType');
        const fabricNotEmpty = Guard.AgainstEmpty(fabricInput, 'fabricType');
        if (!fabricNotNullorUndefined.succeeded && !fabricNotEmpty.succeeded) {
            return Result.Fail<string>(`${fabricNotNullorUndefined.message} or ${fabricNotEmpty}`);
        }
        return Result.Ok<string>(fabricInput)
    }
}