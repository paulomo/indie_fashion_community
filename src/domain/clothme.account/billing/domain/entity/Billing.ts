import BillingId from "../value_object/BillinId";
import { BilledAmount } from "../value_object/BilledAmount";
import { BilledDate } from "../value_object/BilledDate";

interface BillingProps {
    accountId: BillingId
    amount: BilledAmount // Money
    billedDate: BilledDate
}

export class Billing {
    
}