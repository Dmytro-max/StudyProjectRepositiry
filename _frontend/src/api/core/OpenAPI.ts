/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {ApiRequestOptions} from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string> | undefined;
    USERNAME?: string | Resolver<string> | undefined;
    PASSWORD?: string | Resolver<string> | undefined;
    HEADERS?: Headers | Resolver<Headers> | undefined;
    ENCODE_PATH?: ((path: string) => string) | undefined;
};

export const OpenAPI: OpenAPIConfig = {
    BASE: 'http://localhost:3000',
    VERSION: '1.0',
    WITH_CREDENTIALS: true,
    CREDENTIALS: 'include',
    TOKEN: async () => {
        const token = localStorage.getItem('token');
        return token || ''; // Better to return '' than null to keep the flow simple.
    },
    HEADERS: async () => {
        const token = await OpenAPI.TOKEN();
        const headers: Headers = {
            //'Content-Type': 'application/json',
        };

        // If a token exists, add Authorization header
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return headers;
    },
};
