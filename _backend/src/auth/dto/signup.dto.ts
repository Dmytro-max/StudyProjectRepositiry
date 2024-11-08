import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length, Max } from "class-validator";

export class SignUpDto {
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

    @ApiProperty({
        description: 'first name, 4-32 chars length',
        example: 'Jhon',
    })
    @IsNotEmpty()
    @IsString()
    @Length(4, 32)
    firstName: string;
    
    @ApiProperty({
        description: 'Last name, 4-32 chars length',
        example: 'Smith',
    })
    @IsNotEmpty()
    @IsString()
    @Length(4, 32)
    lastName: string;
}