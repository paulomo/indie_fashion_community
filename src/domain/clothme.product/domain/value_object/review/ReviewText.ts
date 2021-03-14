import ValueObject from "../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../clothme.shared.kernel/error/Guard";


interface TextProps {
    content: string;
}

export class ReviewText extends ValueObject<TextProps> {

    private constructor(props: TextProps) {
        super(props);
    }

    public static create(props: TextProps) : Result<ReviewText> {
        const textNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.content, 'text');
        if (!textNullOrUndefinded.succeeded) {
            return Result.Fail<ReviewText>(textNullOrUndefinded.message);
        }
 
        const textEmpty = Guard.AgainstEmpty(props.content, 'text');
        if (!textEmpty.succeeded) {
            return Result.Fail<ReviewText>(textEmpty.message);
        }

        return Result.Ok<ReviewText>(new ReviewText(props));
    }

    get content () {
        return this.props.content;
    }

    public change (newText: string, oldText: ReviewText) : Result<ReviewText> {
        if (newText == oldText.props.content) {
            return Result.Fail<ReviewText>("");
        }
        const textNullOrUndefinded = Guard.AgainstNullOrUndefinded(newText, 'text');
        if (!textNullOrUndefinded.succeeded) {
            return Result.Fail<ReviewText>(textNullOrUndefinded.message);
        }
 
        const textEmpty = Guard.AgainstEmpty(newText, 'text');
        if (!textEmpty.succeeded) {
            return Result.Fail<ReviewText>(textEmpty.message);
        }

        return Result.Ok<ReviewText>(new ReviewText({ content: newText }));
    }
}