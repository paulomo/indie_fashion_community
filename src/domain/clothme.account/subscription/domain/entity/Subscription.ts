import SubscriptionId from '../value_object/SubscriptionId';


interface SubscriptionProps {
    subscriptionId: SubscriptionId;
    subscriptionPrice: number; // Money
    subscriptionStartDate: Date;
    subscriptionEndDate: Date;
    dateCountDown: number;
}

export class Subscription {


}