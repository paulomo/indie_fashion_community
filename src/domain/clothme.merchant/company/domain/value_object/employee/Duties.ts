import ValueObject from "../../../../../clothme.shared.kernel/domain/value_object/ValueObject";
import { IDuties } from "./duties/IDuties";
import { Result } from "../../../../../clothme.shared.kernel/error/Result";
import { Guard } from "../../../../../clothme.shared.kernel/error/Guard";


export interface DutiesProps {
    product: string[];
    sale: string[];
    employee: string[];
    customer: string[];
    wallet: string[];
    analytic: string[];
    report: string[];
}

export class Duties extends ValueObject<DutiesProps> {

    private constructor(props: DutiesProps) {
        super(props);
    }

    public static create (props: DutiesProps) : Result<Duties> {
        // check for certain role
        const dutyResult = Guard.AgainstNullOrUndefinded(props, 'duties')
        if (!dutyResult.succeeded) {
            return Result.Fail<Duties>(dutyResult.message)
        }

        return Result.Ok<Duties>(new Duties(props))
    }

    // public add (props: DutiesProps) : Result<Duties> {
    //     if (props.duties.has(props.dutyType)) {
    //         return Result.Fail<Duties>('already exist')
    //     }

    //     let newduties: Map<string, IDuties[]> = new Map([[props.dutyType, props.duty]])
    //     return Result.Ok<Duties>(new Duties({ duties: new Map([...Array.from(props.duties.entries()), ...Array.from(newduties.entries())])}))
    // }

    // public remove (dutyToRemove: string, props: DutiesProps) : Result<Duties> {
    //     const duties = props.duties.get(props.dutyType)
    //     const newDuties = duties.filter(duty => duty == dutyToRemove);
    //     const newDutiesMap : Map<string, IDuties[]> = new Map();
    //     newDutiesMap.set(props.dutyType, newDuties);
    //     return Result.Ok<Duties>(new Duties({ duties: new Map([...Array.from(newDutiesMap.entries())])}))
    // }

    get productDuties() {
        return this.props.product;
    }

    get saleDuties() {
        return this.props.sale;
    }

    get employeeDuties() {
        return this.props.employee;
    }

    get customerDuties() {
        return this.props.customer
    }

    get walletDuties() {
        return this.props.wallet;
    }

    get analyticDuties() {
        return this.props.analytic;
    }

    get reportDuties() {
        return this.props.report;
    }

}