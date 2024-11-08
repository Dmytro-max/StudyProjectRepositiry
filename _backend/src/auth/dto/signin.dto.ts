import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInDto {
    @ApiProperty({
        description: 'User email address',
        example: 'user@example.com',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'User password',
        example: 'strongPassword123',
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}