import { ApiProperty, OmitType } from "@nestjs/swagger";
import { Tokens } from "../types";
import { User } from "../entities/user.entity";

export class AuthResponseDto {
    @ApiProperty({ description: 'accessToken and refreshToken' })
    tokens: Tokens

    @ApiProperty({ description: 'User details excluding sensitive data like hash' })
    user: User;
}