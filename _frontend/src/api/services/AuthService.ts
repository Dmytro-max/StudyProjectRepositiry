/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponseDto } from '../models/AuthResponseDto';
import type { SignInDto } from '../models/SignInDto';
import type { SignUpDto } from '../models/SignUpDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Sign up a new user
     * @param requestBody
     * @returns AuthResponseDto User successfully signed up
     * @throws ApiError
     */
    public static authControllerLocalSignup(
        requestBody: SignUpDto,
    ): CancelablePromise<AuthResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/local/signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Sign in an existing user
     * @param requestBody
     * @returns AuthResponseDto User successfully signed in
     * @throws ApiError
     */
    public static authControllerLocalSignin(
        requestBody: SignInDto,
    ): CancelablePromise<AuthResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/local/signin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Refresh access and refresh tokens
     * @returns AuthResponseDto Tokens successfully refreshed
     * @throws ApiError
     */
    public static authControllerRefreshTokens(): CancelablePromise<AuthResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/local/refresh',
        });
    }
    /**
     * Log out the current user
     * @returns any User successfully logged out
     * @throws ApiError
     */
    public static authControllerLocalLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/local/logout',
        });
    }
}
