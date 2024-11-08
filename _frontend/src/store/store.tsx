import {AuthService, User} from "../api";
import {makeAutoObservable} from "mobx";
import {fetchRefreshToken} from "./refreshTokenRequest.ts";

export default class Store {
    user = {} as User
    isAuth = false
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user: User) {
        this.user = user
    }

    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    async login(email: string, password: string) {
        try {
            this.setIsLoading(true);
            const response = await AuthService.authControllerLocalSignin({email, password});
            localStorage.setItem("token", response.tokens['accessToken']);
            localStorage.setItem("refreshToken", response.tokens['refreshToken']);
            this.setIsAuth(true);
            this.setUser(response.user);
            this.setIsLoading(false);
        } catch (e) {
            console.error(e)
        }
    }

    async register(email: string, password: string, firstName: string, lastName: string) {
        try {
            this.setIsLoading(true);
            const response = await AuthService.authControllerLocalSignup({email, password, firstName, lastName});
            localStorage.setItem("token", response.tokens['accessToken']);
            localStorage.setItem("refreshToken", response.tokens['refreshToken']);
            this.setIsAuth(true);
            this.setUser(response.user);
            this.setIsLoading(false)
        } catch (e) {
            console.error(e)
        }
    }

    async logOut() {
        try {
            this.setIsLoading(true);
            await AuthService.authControllerLocalLogout()
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            this.setIsAuth(false);
            this.setUser({} as User);
            this.setIsLoading(false)
        } catch (e) {
            console.error(e)
        }
    }

    async checkAuth() {
        try {
            const response = await fetchRefreshToken();
            localStorage.setItem("token", response.tokens['accessToken']);
            localStorage.setItem("refreshToken", response.tokens['refreshToken']);
            this.setIsAuth(true);
            this.setUser(response.user);
        } catch (e) {
            console.error(e)
        }
    }
}