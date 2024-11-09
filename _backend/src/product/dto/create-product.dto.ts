import { ApiProperty, } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsString, IsOptional, IsNumber, IsBoolean } from "class-validator";

export class CreateProductDto implements Prisma.ProductCreateInput {
    @ApiProperty({
        description: 'The name of the product',
        type: String,
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'The price of the product',
        type: Number,
    })
    @IsNumber()
    price: number;

    @ApiProperty({
        description: 'A brief description of the product',
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({
        description: 'Indicates whether the product is available for purchase',
        type: Boolean,
        default: true,
        required: false,
    })
    @IsOptional()
    @IsBoolean()
    available?: boolean;

    @ApiProperty({
        description: 'Optional cover image file for the product',
        type: 'string',
        format: 'binary',
        required: false,
    })
    cover?: Express.Multer.File;
}