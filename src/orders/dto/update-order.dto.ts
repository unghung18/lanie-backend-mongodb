import { IsEnum } from "class-validator";

export enum OrderStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export class UpdateOrderDto {
    @IsEnum(OrderStatus)
    status: OrderStatus
}

