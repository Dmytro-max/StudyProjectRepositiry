import { ApiProperty } from "@nestjs/swagger";
import { Prisma, Product as PrismaProduct } from "@prisma/client";
import { ProductCategory } from "./product-category.entity";

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
        description: 'A brief description of the product',
        type: String,
        nullable: true,
    })
    description: string;

    @ApiProperty({
        description: 'Cover image URL of the product',
        type: String,
        nullable: true,
    })
    coverImageUrl: string;

    @ApiProperty({
        description: 'The trade mark of the product',
        type: String,
        nullable: true,
    })
    tradeMark: string;

    @ApiProperty({
        description: 'The quantity of the product in a package',
        type: String,
        nullable: true,
    })
    quantityInPackage: string;

    @ApiProperty({
        description: 'The terms of sale for the product',
        type: String,
        nullable: true,
    })
    termsOfSale: string;

    @ApiProperty({
        description: 'The country where the product originated',
        type: String,
        nullable: true,
    })
    countryOfOrigin: string;

    @ApiProperty({
        description: 'The release form of the product',
        type: String,
        nullable: true,
    })
    releaseForm: string;

    @ApiProperty({
        description: 'The ID of the category the product belongs to',
        type: String,
    })
    categoryId: string;

    @ApiProperty({
        description: 'The category the product belongs to',
        type: ProductCategory, // Refer to the ProductCategory model
        nullable: true,
    })
    category?: ProductCategory;
}
