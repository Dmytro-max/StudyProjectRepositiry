import { ForbiddenException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AuthResponseDto, SignUpDto } from './dto';
import * as bcrypt from 'bcrypt'
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';
import { User as PrismaUser } from "@prisma/client";

@Injectable()
export class AuthService {
    constructor(private dbService: DatabaseService,
        private jwtService: JwtService) {

    }

    async localSignup(signupDto: SignUpDto): Promise<AuthResponseDto> {
        const hash = await this.hashData(signupDto.password)
        const newUser = await this.dbService.user.create({
            data: {
                email: signupDto.email,
                firstName: signupDto.firstName,
                lastName: signupDto.lastName,
                hash
            }
        })

        const tokens = await this.getTokens(newUser.id, newUser.email);
        this.updateRtHash(newUser.id, tokens.refreshToken)

        return this.transformToAuthResponse(tokens, newUser)
    }
    async localSignin(signInDto: SignInDto): Promise<AuthResponseDto> {
        const user = await this.dbService.user.findUnique({
            where: {
                email: signInDto.email
            }
        })

        if (!user) {
            throw new ForbiddenException('Access Denied')
        }

        const passwordMatches = bcrypt.compare(signInDto.password, user.hash);
        if (!passwordMatches) {
            throw new ForbiddenException('Access Denied')
        }
        const tokens = await this.getTokens(user.id, user.email);
        this.updateRtHash(user.id, tokens.refreshToken)

        return this.transformToAuthResponse(tokens, user)
    }

    async refreshTokens(userId: string, rt: string): Promise<AuthResponseDto> {
        const user = await this.dbService.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!user) {
            throw new ForbiddenException('Access Denied')
        }

        const rtMatches = bcrypt.compare(rt, user.hashRt)

        if (!rtMatches) {
            throw new ForbiddenException('Access Denied')
        }

        const tokens = await this.getTokens(user.id, user.email);
        this.updateRtHash(user.id, tokens.refreshToken)
        return this.transformToAuthResponse(tokens, user)
    }

    async localLogout(userId: string) {
        await this.dbService.user.updateMany({
            where: {
                id: userId,
                hashRt: {
                    not: null
                }
            },
            data: {
                hashRt: null
            }
        })
    }


    private hashData(data: string) {
        return bcrypt.hash(data, 10);
    }

    private async updateRtHash(userId: string, rt: string) {
        const hash = await this.hashData(rt);
        await this.dbService.user.update({
            where: {
                id: userId
            },
            data: {
                hashRt: hash
            }
        })
    }

    private async getTokens(userId: string, email: string): Promise<Tokens> {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync(
                {
                    sub: userId,
                    email
                },
                {
                    expiresIn: 60 * 30,
                    secret: 'at-secret'
                }
            ),
            this.jwtService.signAsync(
                {
                    sub: userId,
                    email
                },
                {
                    expiresIn: 60 * 60 * 24 * 7,
                    secret: 'rt-secret'
                }
            )
        ])

        return {
            accessToken: at,
            refreshToken: rt
        };
    }
    private transformToAuthResponse(tokens: Tokens, user: PrismaUser): AuthResponseDto {
        const { hash, hashRt, ...publicFields } = user;
        return {
            user: { ...publicFields },
            tokens
        }
    }
}
