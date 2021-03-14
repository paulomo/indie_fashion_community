import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { IMeasurement } from "./measurement/IMeasurement";
import { Result } from "../../../../clothme.shared.kernel/error/Result";

export interface MeasurementProps {
    measurement: IMeasurement
}

export class Measurement extends ValueObject<MeasurementProps> {

    private constructor(props: MeasurementProps) {
        super(props)
    }

    public static create(props: MeasurementProps) : Result<Measurement> {
        return Result.Ok<Measurement>(new Measurement(props))
    }

    get measurement() : IMeasurement {
        return this.props.measurement
    }
}