import { Entity } from "../entity/Entity";
import { DomainEvents } from "../event/DomainEvents";
import { IDomainEvent } from "../event/IDomainEvent";
import Guid from "./Guid";


export class AggregateRoot<T> extends Entity<T> {
    private _domainEvents: IDomainEvent[] = [];

    get id (): Guid {
        return this._id;
    }

    // get domainEvents (): IDomainEvent[] {
    //     return this._domainEvents;
    // }

    // protected addDomainEvent (domainEvent: IDomainEvent): void {
    //     this._domainEvents.push(domainEvent);

    //     DomainEvents.markAggregateForDispatch(this);

    //     this.logDomainEventAdded(domainEvent);
    // }

    // public clearEvents (): void {
    //     this._domainEvents.splice(0, this._domainEvents.length);
    // }

    // private logDomainEventAdded (domainEvent: IDomainEvent): void {
    //     const thisClass = Reflect.getPrototypeOf(this);
    //     const domainEventClass = Reflect.getPrototypeOf(domainEvent);
    //     console.info(`[Domain Event Created]:`, thisClass.constructor.name, '==>', domainEventClass.constructor.name)
    // }
}