interface ValueObjectProperty {
    [index: string] : any
}

export default class ValueObject<T extends ValueObjectProperty> {
    public props: T;
    
    constructor(props: T) {
        let baseProps: any = {...props, }
        this.props = baseProps;
    }

    public Equals (vo: ValueObject<T>) : boolean {
        if (vo === null || vo === undefined) {
            return false;
        }

        if (vo.props === undefined) {
            return false;
        }

        return JSON.stringify(this.props) === JSON.stringify(vo.props);
    }
}