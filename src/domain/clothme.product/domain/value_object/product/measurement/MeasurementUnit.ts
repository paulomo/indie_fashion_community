import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";


interface MeasurementProps {
    width: number;
    height: number;
}

export class MeasurementUnit extends ValueObject<MeasurementProps> {

    private constructor(props: MeasurementProps) {
        super(props)
    }

    private static IsValidMeasurement (aWidth: number, aHeight: number) : boolean {
        if (aHeight === null || aWidth === null || aHeight === undefined || aWidth === null || aHeight < 0 || aWidth < 0) {
            return false
        } else {
            return true;
        }
    }

    public static create (aWidth: number, aHeight: number) {}

    public static convertToInches(aMeasurementValue: MeasurementUnit) : MeasurementUnit {
        const width = parseInt((aMeasurementValue.props.width * 0.393701).toFixed(2));
        const height = parseInt((aMeasurementValue.props.height * 0.393701).toFixed(2));
        return new MeasurementUnit({width, height});
    }

    public static convertToCentimers(aMeasurementValue: MeasurementUnit) : MeasurementUnit {
        const width = aMeasurementValue.props.width * 2.54;
        const height = aMeasurementValue.props.height * 2.54;
        return new MeasurementUnit({ width, height });
    }
}