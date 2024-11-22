import { Pharmacy as PrismaPharmacy } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";  // Import ApiProperty for Swagger documentation

export class Pharmacy implements PrismaPharmacy {
    @ApiProperty({
        description: 'The name of the pharmacy',
        type: String,
        example: 'Healthy Pharmacy',
    })
    name: string;

    @ApiProperty({
        description: 'The unique identifier of the pharmacy',
        type: String,
        example: '12345',
    })
    id: string;

    @ApiProperty({
        description: 'The date and time when the pharmacy record was created',
        type: String,
        format: 'date-time',
        example: '2024-11-22T16:15:59.936Z',
    })
    createdAt: Date;

    @ApiProperty({
        description: 'The date and time when the pharmacy record was last updated',
        type: String,
        format: 'date-time',
        example: '2024-11-22T16:15:59.936Z',
    })
    updatedAt: Date;

    @ApiProperty({
        description: 'The address of the pharmacy',
        type: String,
        example: '123 Main Street, Cityville, Country',
    })
    address: string;

    @ApiProperty({
        description: 'The latitude coordinate of the pharmacy',
        type: String,
        example: '40.712776',
    })
    lat: string;

    @ApiProperty({
        description: 'The longitude coordinate of the pharmacy',
        type: String,
        example: '-74.005974',
    })
    lng: string;
}
