import {
  AuthService,
  CreateProductDto,
  Product,
  ProductsService,
  User,
} from "../api";
import { makeAutoObservable } from "mobx";
import { fetchRefreshToken } from "./refreshTokenRequest.ts";

export default class Store {
  user = {} as User;
  isAuth = false;
  isLoading = false;
  productsIsLoading = false;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cartProductsIds: { [key: string]: number } = {};

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setProductsIsLoading(isLoading: boolean) {
    this.productsIsLoading = isLoading;
  }

  setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  setProducts(products: Product[]) {
    this.products = [...products];
  }

  setFilteredProducts(products: Product[]) {
    this.filteredProducts = [...products];
  }

  setCartProductsIds(products: { [key: string]: number }) {
    this.cartProductsIds = products;
  }

  addCartProductId(product_id: string) {
    if (!this.getCartProductsIds()) {
      this.addCartProductId(JSON.stringify({ product_id: 1 }));
    } else {
      // const products = this.getCartProductsIds() as object;
      if (this.cartProductsIds[product_id]) {
        this.cartProductsIds[product_id] += 1;
      } else {
        this.cartProductsIds[product_id] = 1;
      }
      // this.setCartProductsIds((products));
    }
  }

  getCartProductsIds() {
    return this.cartProductsIds;
  }

  async getProducts() {
    try {
      this.setProductsIsLoading(true);
      const res = await ProductsService.productControllerFindAll();
      this.setProducts(res);
      this.setFilteredProducts(res);
    } catch (e) {
      console.error(e);
    } finally {
      this.setProductsIsLoading(false);
    }
  }

  async login(email: string, password: string) {
    try {
      this.setIsLoading(true);
      const response = await AuthService.authControllerLocalSignin({
        email,
        password,
      });
      localStorage.setItem("token", response.tokens["accessToken"]);
      localStorage.setItem("refreshToken", response.tokens["refreshToken"]);
      this.setIsAuth(true);
      this.setUser(response.user);
      this.setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  }

  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    try {
      this.setIsLoading(true);
      const response = await AuthService.authControllerLocalSignup({
        email,
        password,
        firstName,
        lastName,
      });
      localStorage.setItem("token", response.tokens["accessToken"]);
      localStorage.setItem("refreshToken", response.tokens["refreshToken"]);
      this.setIsAuth(true);
      this.setUser(response.user);
      this.setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  }

  async logOut() {
    try {
      this.setIsLoading(true);
      await AuthService.authControllerLocalLogout();
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      this.setIsAuth(false);
      this.setUser({} as User);
      this.setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  }

  async checkAuth() {
    try {
      const response = await fetchRefreshToken();
      localStorage.setItem("token", response.tokens["accessToken"]);
      localStorage.setItem("refreshToken", response.tokens["refreshToken"]);
      this.setIsAuth(true);
      this.setUser(response.user);
    } catch (e) {
      console.error(e);
    }
  }

  async addProduct(product: CreateProductDto) {
    try {
      this.setIsLoading(true);
      console.log(product);
      const response = await ProductsService.productControllerCreate(product);
      return response;
    } catch (e) {
      console.error(e);
    } finally {
      this.setIsLoading(false);
    }
  }
}
