// Utility function to make a refresh token request
import {OpenAPI} from "../api/core/OpenAPI.ts";
import {AuthResponseDto} from "../api";

export const fetchRefreshToken = async (): Promise<AuthResponseDto> => {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
        return {} as AuthResponseDto;
    }

    const response = await fetch(`${OpenAPI.BASE}/auth/local/refresh`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${refreshToken}`,
            'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies if they're used with the refresh token
    });

    if (!response.ok) {
        throw new Error('Failed to refresh token');
    }

    const data: AuthResponseDto = await response.json();
    return data;
};
