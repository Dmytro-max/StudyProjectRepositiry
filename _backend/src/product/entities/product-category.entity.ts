import { Prisma, ProductCategory as PrismaProductCategory } from "@prisma/client";

import { ApiProperty } from '@nestjs/swagger';

export class ProductCategory implements PrismaProductCategory {
    @ApiProperty({
        description: 'The unique identifier for the product category',
        type: String,
    })
    id: string;

    @ApiProperty({
        description: 'The name of the product category',
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'The date and time when the product category was created',
        type: Date,
    })
    createdAt: Date;

    @ApiProperty({
        description: 'The date and time when the product category was last updated',
        type: Date,
    })
    updatedAt: Date;

    @ApiProperty({
        description: 'The description of the product category',
        type: String,
        nullable: true, // Assuming description is optional
    })
    description: string;
}
