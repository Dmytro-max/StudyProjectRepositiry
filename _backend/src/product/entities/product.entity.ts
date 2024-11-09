import { ApiProperty } from "@nestjs/swagger";
import { Prisma, Product as PrismaProduct } from "@prisma/client";

export class Product implements PrismaProduct {
    @ApiProperty({
        description: 'The unique identifier for the product',
        type: String,
    })
    id: string;

    @ApiProperty({
        description: 'The name of the product',
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'The date and time when the product was created',
        type: Date,
    })
    createdAt: Date;

    @ApiProperty({
        description: 'The date and time when the product was last updated',
        type: Date,
    })
    updatedAt: Date;

    @ApiProperty({
        description: 'The price of the product',
        type: Number,
    })
    price: number;

    @ApiProperty({
        description: 'A brief description of the product',
        type: String,
    })
    description: string;

    @ApiProperty({
        description: 'Indicates whether the product is available for purchase',
        type: Boolean,
        default: true,
    })
    available: boolean;

    @ApiProperty({
        description: 'Cover image url',
        type: String,
    })
    coverImageUrl: string;
}
