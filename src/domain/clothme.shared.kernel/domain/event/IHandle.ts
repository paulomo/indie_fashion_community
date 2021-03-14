import { IDomainEvent } from './IDomainEvent';

export interface IHandle<IDomainEvent> {
    setSubscriptions () : void;
}