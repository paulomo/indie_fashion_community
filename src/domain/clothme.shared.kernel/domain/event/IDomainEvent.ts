import Guid from "../entity/Guid";

export interface IDomainEvent {
    dateTimeOccured: Date;
    getAggregateId (): Guid;
}