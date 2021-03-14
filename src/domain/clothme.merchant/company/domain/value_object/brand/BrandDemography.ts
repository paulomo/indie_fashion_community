import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";

interface DemographyProps {
    type: string;
}

export class BrandDemography extends ValueObject<DemographyProps> {
    private constructor(props: DemographyProps) {
        super(props);
    }

    public static create(props: DemographyProps): Result<BrandDemography> {
        const demographyEmpty = Guard.AgainstEmpty(props.type, "demography");
        if (!demographyEmpty.succeeded) {
            return Result.Fail<BrandDemography>(demographyEmpty.message);
        }

        const demographyNullOrUndefinded = Guard.AgainstNullOrUndefinded(
            props.type,
            "demography"
        );
        if (!demographyNullOrUndefinded.succeeded) {
            return Result.Fail<BrandDemography>(demographyNullOrUndefinded.message);
        }

        return Result.Ok<BrandDemography>(new BrandDemography(props));
    }

    get type() {
        return this.props.type;
    }

    public change(
        newDemography: string,
        currentDemography: BrandDemography
    ): Result<BrandDemography> {
        if (currentDemography.props.type == newDemography) {
            return Result.Fail<BrandDemography>("");
        }

        const newDemographyEmpty = Guard.AgainstEmpty(newDemography, "demography");
        if (!newDemographyEmpty.succeeded) {
            return Result.Fail<BrandDemography>(newDemographyEmpty.message);
        }

        const newDemographyNullOrUndefinded = Guard.AgainstNullOrUndefinded(
            newDemography,
            "demography"
        );
        if (!newDemographyNullOrUndefinded.succeeded) {
            return Result.Fail<BrandDemography>(newDemographyNullOrUndefinded.message);
        }

        return Result.Ok<BrandDemography>(new BrandDemography({ type: newDemography }));
    }
}
