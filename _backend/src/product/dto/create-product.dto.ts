import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateProductDto implements Prisma.ProductCreateInput {
    @ApiProperty({
        description: 'The name of the product',
        type: String,
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'A brief description of the product',
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({
        description: 'Optional cover image file for the product',
        type: 'string',
        format: 'binary',
        required: false,
    })
    cover?: Express.Multer.File;

    @ApiProperty({
        description: 'The trademark of the product',
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    tradeMark?: string;

    @ApiProperty({
        description: 'The quantity of products in a package',
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    quantityInPackage?: string;

    @ApiProperty({
        description: 'The terms of sale for the product',
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    termsOfSale?: string;

    @ApiProperty({
        description: 'The country of origin of the product',
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    countryOfOrigin?: string;

    @ApiProperty({
        description: 'The release form of the product (e.g., tablet, liquid)',
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    releaseForm?: string;

    @ApiProperty({
        description: 'The ID of the category the product belongs to',
        type: String,
    })
    @IsString()
    categoryId: string;
}
