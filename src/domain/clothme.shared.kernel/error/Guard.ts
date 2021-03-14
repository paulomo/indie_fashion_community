export interface IGuardResult {
    succeeded: boolean,
    message: string
}

export interface IGuardArgument {
    argument: any,
    argumentName: string
}

export type GuardArgumentCollection = IGuardArgument[];

export class Guard {
    public static Combine (guardResult: IGuardResult[]) : IGuardResult {
        for (let result of guardResult) {
            if (result.succeeded === false) { 
                return result;
            }
        }
        return {
            succeeded: true,
            message: ""
        }
    }

    public static GreaterThan (minValue: number, givenValue: number) : IGuardResult {
        return givenValue > minValue 
        ? { succeeded: true, message: "" } 
        : {
            succeeded: false,
            message: `Number given {${givenValue}} is not greater than {${minValue}}`
        }
    }

    public static LesserThan (maxValue: number, givenValue: number) : IGuardResult {
        return givenValue < maxValue 
        ? { succeeded: true, message: "" } 
        : {
            succeeded: false,
            message: `Number given ${givenValue} cannot greater than ${maxValue}`
        }
    }

    public static AgainstAtLeast (numChars: number, text: string) : IGuardResult {
        return text.length >= numChars 
        ? { succeeded: true, message: "" } 
        : {
            succeeded: false,
            message: `Text is not at least ${numChars} chars.`
        }
    }

    public static AgainstAtMost (numChars: number, text: string) : IGuardResult {
        return text.length <= numChars 
        ? { succeeded: true, message: "" } 
        : {
            succeeded: false,
            message: `Text is greater than ${numChars} chars.`
        }
    }

    public static AgainstNullOrUndefinded (argument: any, argumentName: string) : IGuardResult {
        if (argument === null || argument === undefined) {
            return { succeeded: false, message: `${argumentName} is null or undefined` }
        } else {
            return { succeeded: true, message: ""}
        }
    }

    public static AgainstNullOrUndefindedBulk (argument: GuardArgumentCollection) : IGuardResult {
        for (let arg of argument) {
            const result = this.AgainstNullOrUndefinded(arg.argument, arg.argumentName);
            if (!result.succeeded) {
                return result;
            }
        }
        return { succeeded: true, message: "" }
    }

    public static IsOneOf (value: any, validValues: any[], argumentName: string) : IGuardResult {
        let isValid = false;
        for (let validValue of validValues) {
            if (value === validValue) {
                isValid = true;
            }
        }

        if (isValid) {
            return { succeeded: true, message: "" }
        } else {
            return {
                succeeded: false,
                message: `${argumentName} isn't oneOf the correct types in ${JSON.stringify(validValues)}. Got "${value}`
            }
        }
    }

    public static InRange (num: number, min: number, max: number, argumentName: string) : IGuardResult {
        const isInRange = num >= min && num <= max;
        if (!isInRange) {
            return { succeeded: false, message: `${argumentName} is not within range ${min} to ${max}`}
        } else {
            return { succeeded: true, message: "" }
        }
    }

    // public static AllInRange (numbers: number[], min: number, max: number, argumentName: string) : IGuardResult {
    //     let failingResult: IGuardResult = null;
    //     for (let num of numbers) {
    //         const numIsInRangeResult = this.InRange(num, min, max, argumentName);
    //         if (!numIsInRangeResult.succeeded) {
    //            failingResult = numIsInRangeResult;
    //         }
    //     }

    //     if (failingResult) {
    //         return { succeeded: false, message: `${argumentName} is not within the range.`}
    //     } else {
    //         return { succeeded: true, message: "" }
    //     }
    // }

    public static AgainstEmpty (argument: string, argumentName: string) : IGuardResult {
        if (argument === '' || argument.length < 1) {
            return { succeeded: false, message: `${argumentName} can not be empty` }
        } else {
            return { succeeded: true, message: "" }
        }
    }

    public static AgainstEmptyBulk (argument: GuardArgumentCollection) : IGuardResult {
        for (let arg of argument) {
            const result = this.AgainstEmpty(arg.argument, arg.argumentName);
            if (!result.succeeded) {
                return result;
            }
        }
        return { succeeded: true, message: "" }
    }

    public static AgainstZero (argument: number, argumentName: string) : IGuardResult {
        if (argument <= 0) {
            return { succeeded: false, message: `${argumentName} can not be empty` }
        } else {
            return { succeeded: true, message: ""}
        }
    }

    public static AgainstNegative (argument: number, argumentName: string) : IGuardResult {
        if (argument < 0) {
            return { succeeded: false, message: `${argumentName} can not be empty` }
        } else {
            return { succeeded: true, message: ""}
        }
    }

    public static AgainstLessThan (minValue: number, value: number) : IGuardResult {
        return value >= minValue 
        ? { succeeded: true, message: "" } 
        : {
            succeeded: false,
            message: `Value is not at least ${minValue}.`
        }
    }

    public static AgainstGreaterThan (maxValue: number, value: number) : IGuardResult {
        return value <= maxValue 
        ? { succeeded: true, message: "" } 
        : {
            succeeded: false,
            message: `Value is not at least ${maxValue}.`
        }
    }

}


export class Validation {
    
    public static isSame (object: any, phoneNumber: string) : IGuardResult {
        return object != phoneNumber 
        ? { succeeded: true, message: "" }
        : {
            succeeded: false,
            message: `${phoneNumber} is the same as ${object}`
        }
    }
}