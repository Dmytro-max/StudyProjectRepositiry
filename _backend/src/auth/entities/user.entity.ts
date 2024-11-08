import { User as PrismaUser } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';
import { Tokens } from "../types";
import { AuthResponseDto } from "../dto";

export class User {
    @ApiProperty({ description: 'User ID' })
    id: string;

    @ApiProperty({ description: 'First name' })
    firstName: string;

    @ApiProperty({ description: 'Last name' })
    lastName: string;

    @ApiProperty({ description: 'User creation date' })
    createdAt: Date;

    @ApiProperty({ description: 'User update date' })
    updatedAt: Date;

    @ApiProperty({ description: 'User email address' })
    email: string;
}