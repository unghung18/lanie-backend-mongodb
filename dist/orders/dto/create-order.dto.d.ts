export declare enum OrderStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare class CreateOrderDto {
    customer_name: string;
    customer_phoneNumber: string;
    shipping_address: string;
    order_date: Date;
    status: OrderStatus;
    total_amount: number;
    products: {
        product: string;
        order_color: {
            order_colorName: string;
            order_quantity: number;
        };
        totalPrice: string;
    }[];
}
