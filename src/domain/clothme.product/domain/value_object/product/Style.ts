import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface StyleProps {
    name: string;
}

export class Style extends ValueObject<StyleProps> {

    private constructor(props: StyleProps) {
        super(props);
    }

    public static create (props: StyleProps) : Result<Style> {
        const styleNotNullorUndefined = Guard.AgainstNullOrUndefinded(props.name, 'style');
        if (!styleNotNullorUndefined.succeeded) {
            return Result.Fail<Style>(styleNotNullorUndefined.message);
        }

        const styleNotEmpty = Guard.AgainstEmpty(props.name, 'style');
        if (!styleNotEmpty.succeeded) {
            return Result.Fail<Style>(styleNotEmpty.message);
        }

        return Result.Ok<Style>(new Style(props));
    }

    get type () {
        return this.props.name;
    }

    public change (newStyle: string) : Result<Style> {
        const styleNotNullorUndefined = Guard.AgainstNullOrUndefinded(newStyle, 'style');
        if (!styleNotNullorUndefined.succeeded) {
            return Result.Fail<Style>(styleNotNullorUndefined.message);
        }

        const styleNotEmpty = Guard.AgainstEmpty(newStyle, 'style');
        if (!styleNotEmpty.succeeded) {
            return Result.Fail<Style>(styleNotEmpty.message);
        }

        return Result.Ok<Style>(new Style({ name: newStyle }));
    }
}