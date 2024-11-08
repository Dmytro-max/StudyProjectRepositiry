/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
export type AuthResponseDto = {
    /**
     * accessToken and refreshToken
     */
    tokens: Record<string, any>;
    /**
     * User details excluding sensitive data like hash
     */
    user: User;
};

