import { AggregateRoot } from "../entity/AggregateRoot"
import { IDomainEvent } from "./IDomainEvent";
import Guid from "../entity/Guid";


export class DomainEvents {
    // private static handlersMap = {};
    // private static markedAggregates: AggregateRoot<any>[] = [];

    // public static markAggregateForDispatch(aggregate: AggregateRoot<any>): void {
    //     const aggregateFound = !!this.findMarkedAggregateByID(aggregate.id);

    //     if (!aggregateFound) {
    //         this.markedAggregates.push(aggregate);
    //     }
    // }

    // private static dispatchAggregateEvents (aggregate: AggregateRoot<any>): void {
    //     aggregate.domainEvents.forEach((event: IDomainEvent) => this.dispatch(event));
    // }

    // private static removeAggregateFromMarkedDspatchList (aggregate: AggregateRoot<any>): void {
    //     const index = this.markedAggregates.findIndex((a) => a.equals(aggregate));
    //     this.markedAggregates.splice(index, 1);
    // }

    // private static findMarkedAggregateByID (id: Guid): AggregateRoot<any> {
    //     let found: AggregateRoot<any> = null;
    //     for (let aggregate of this.markedAggregates) {
    //         if (aggregate.id.equals(id)) {
    //             found = aggregate;
    //         }
    //     }
    //     return found;
    // }

    // public static dispatcheventsForAggregate (id: Guid): void {
    //     const aggregate = this.findMarkedAggregateByID(id);

    //     if (aggregate) {
    //         this.dispatchAggregateEvents(aggregate);
    //         aggregate.clearEvents();
    //         this.removeAggregateFromMarkedDspatchList(aggregate);
    //     }
    // }

    // public static register(callback: (event: IDomainEvent) => void, eventClassName: string): void {
    //     if (!this.handlersMap.hasOwnProperty(eventClassName)) {
    //         this.handlersMap[eventClassName] = [];
    //     }
    //     this.handlersMap[eventClassName].push(callback);
    // }

    // public static clearhandlers(): void {
    //     this.handlersMap = {};
    // }

    // public static clearMarkedAggregates(): void {
    //     this.markedAggregates = [];
    // }

    // private static dispatch (event: IDomainEvent): void {
    //     const eventClassName: string = event.constructor.name;

    //     if (this.handlersMap.hasOwnProperty(eventClassName)) {
    //         const handlers: any[] = this.handlersMap[eventClassName];
    //         for (let handler of handlers) {
    //             handler(event);
    //         }
    //     }
    // }
}