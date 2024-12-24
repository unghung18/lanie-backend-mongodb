import { IsNotEmpty, IsDefined, IsEnum } from "class-validator";

export enum OrderStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export class CreateOrderDto {

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    customer_name: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    customer_phoneNumber: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    shipping_address: string;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    order_date: Date;

    @IsEnum(OrderStatus)
    status: OrderStatus

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    total_amount: number;

    @IsNotEmpty()
    @IsDefined({ message: "This field is required." })
    products: {
        product: string;
        order_color: {
            order_colorName: string;
            order_quantity: number;
        };
        totalPrice: string;
    }[]
}

