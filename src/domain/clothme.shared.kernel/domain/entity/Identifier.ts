export default class Identifier<T> {
    private value: T

    constructor(value: T) {
        this.value = value
    }

    public equals (id?: Identifier<T>) : boolean {
        if (id === undefined || id === null) {
            return false;
        }

        if (!(id instanceof this.constructor)) {
            return false;
        }

        return id.toRawValue() == this.value;
    }

    toRawValue () : T {
        return this.value;
    }

    toString() {
        return String(this.value);
    }
}