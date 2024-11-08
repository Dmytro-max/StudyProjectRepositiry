import { User as PrismaUser } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class User implements PrismaUser {
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

    @ApiProperty({ description: 'Password hash', example: 'hashed_password_example' })
    hash: string;

    @ApiProperty({ description: 'Refresh token hash', example: 'hashed_refresh_token_example' })
    hashRt: string;
}