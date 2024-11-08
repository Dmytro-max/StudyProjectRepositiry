import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthResponseDto, SignInDto, SignUpDto } from './dto';
import { AtGuard, RtGuard } from './common/guards';
import { GetCurrentUser, GetCurrentUserId } from './common/decorators';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @ApiOperation({ summary: 'Sign up a new user' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'User successfully signed up', type: AuthResponseDto })
    @ApiBody({ type: SignUpDto })
    @Post('local/signup')
    @HttpCode(HttpStatus.CREATED)
    localSignup(@Body() signupDto: SignUpDto): Promise<AuthResponseDto> {
        return this.authService.localSignup(signupDto);
    }

    @ApiOperation({ summary: 'Sign in an existing user' })
    @ApiResponse({ status: HttpStatus.OK, description: 'User successfully signed in', type: AuthResponseDto })
    @ApiBody({ type: SignInDto })
    @Post('local/signin')
    @HttpCode(HttpStatus.OK)
    localSignin(@Body() signInDto: SignInDto): Promise<AuthResponseDto> {
        return this.authService.localSignin(signInDto);
    }

    @ApiOperation({ summary: 'Refresh access and refresh tokens' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Tokens successfully refreshed', type: AuthResponseDto })
    @ApiBearerAuth()
    @UseGuards(RtGuard)
    @Post('local/refresh')
    @HttpCode(HttpStatus.OK)
    refreshTokens(
        @GetCurrentUser('refreshToken') rt: string,
        @GetCurrentUserId() userId: string,
    ): Promise<AuthResponseDto> {
        return this.authService.refreshTokens(userId, rt);
    }

    @ApiOperation({ summary: 'Log out the current user' })
    @ApiResponse({ status: HttpStatus.OK, description: 'User successfully logged out' })
    @ApiBearerAuth()
    @UseGuards(AtGuard)
    @Post('local/logout')
    @HttpCode(HttpStatus.OK)
    localLogout(@GetCurrentUserId() userId: string) {
        return this.authService.localLogout(userId);
    }
}
