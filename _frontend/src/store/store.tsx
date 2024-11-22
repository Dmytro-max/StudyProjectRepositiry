import {
  AuthService,
  CreateProductDto,
  Product,
  ProductCategory,
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
  productCategories: ProductCategory[] = [];

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

  setProductCategories(productCategories: ProductCategory[]) {
    this.productCategories = [...productCategories];
  }

  setFilteredProducts(products: Product[]) {
    this.filteredProducts = [...products];
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

  async getProductCategories() {
    try {
      this.setIsLoading(true);
      const res =
        await ProductsService.productControllerFindAllProductCategories();
      this.setProductCategories(res);
    } catch (e) {
      console.error(e);
    } finally {
      this.setIsLoading(false);
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

  filterProductsByCategory(category: string) {
    console.log(this.products);
    const products = this.products.filter((p) => {
      return p.category?.name === category;
    });
    this.setFilteredProducts(products);
  }

  clearCategoryFilter() {
    this.setFilteredProducts(this.products);
  }
}
