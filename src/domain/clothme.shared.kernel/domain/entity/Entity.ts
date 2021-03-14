import Guid from './Guid';

const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
}

export abstract class Entity<T> {
    protected readonly _id: Guid;
    public readonly props: T

    constructor(props: T, id?: Guid) {
        this._id = id ? id : new Guid();
        this.props = props;
    }
    /**
     * Entities are compared based on their referential equality.
     */
    public equals(other?: Entity<T>) : boolean {
        if (other == null || other == undefined)
            return false;

        if (typeof(this._id) !== typeof(other._id))
            return false;

        if (!isEntity(other))
            return false;
        
        if (this === other) 
            return true;

        if (this._id === undefined || other._id === undefined)
            return false;
        
        return this._id.equals(other._id);
    }

}



// import Guid from './Guid';

// export default abstract class Entity {
//     protected id: Guid;

//     constructor(id?: Guid) {
//         this.id = id ? id : new Guid();
//     }
//     /**
//      * Entities are compared based on their referential equality.
//      */
//     public Equals(other: Entity) : boolean {
//         if (other === null)
//             return false;

//         if (typeof(this.id) !== typeof(other.id))
//             return false;

//         if (this instanceof Entity !== other instanceof Entity)
//             return false;
        
//         if (this === other) 
//             return true;

//         if (this.id === undefined || other.id === undefined)
//             return false;
        
//         return this.id === other.id;
//     }

//     public static EqualsOperator(a: Entity, b: Entity) : boolean {
//         if (a === null && b === null)
//             return true;

//         if (a === null || b === null)
//             return false;

//         return a.Equals(b);
//     }

//     public static NotEqualsOperator(a: Entity, b: Entity) : boolean {
//         return !(a === b);
//     }

// }