export declare enum OrderStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare class UpdateOrderDto {
    status: OrderStatus;
}
