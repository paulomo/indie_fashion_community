import { IDuties } from "./IDuties";
import ValueObject from "../../../../../../clothme.shared.kernel/domain/value_object/ValueObject";



interface LocationDutiesProps {
    given: string[]; // open, close, suspend
}

export class LocationDuties extends ValueObject<LocationDutiesProps> implements IDuties {

    private constructor(props: LocationDutiesProps) {
        super(props)
    }

}