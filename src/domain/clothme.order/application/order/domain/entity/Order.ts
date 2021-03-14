export interface OrderProps {
    orderId: string;
    orderDate: Date;
    orderItems: [string];
    customer: string;
    expectedDeliveryDate: Date;
    shippingDetails: string;
}