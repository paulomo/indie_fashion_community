import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


interface RoleProps {
    values: string[];
}

export class Role extends ValueObject<RoleProps> {

    private constructor (props: RoleProps) {
        super(props);
    }

    public static set (props: RoleProps) : Result<Role> {
        const titlesNullOrUndefinded = Guard.AgainstNullOrUndefinded(props.values, 'title');
        if (!titlesNullOrUndefinded.succeeded) {
            return Result.Fail<Role>(titlesNullOrUndefinded.message);
        }

        return Result.Ok<Role>(new Role(props))
    }

    get title () : string[] {
        return this.props.values
    }
    
    public assign (roleToAdd: string) {
        return this.props.values.push(roleToAdd);
    }

    public remove (roleToAdd: string) : string[] {
        return this.props.values.filter(role => role === roleToAdd);
    }
}
