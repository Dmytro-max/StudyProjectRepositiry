/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { CreateProductDto, Product, UpdateProductDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Products<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerCreate
   * @summary Create new product
   * @request POST:/products
   */
  productControllerCreate = (data: CreateProductDto, params: RequestParams = {}) =>
    this.request<Product, void>({
      path: `/products`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerFindAll
   * @summary Retrieve all products
   * @request GET:/products
   */
  productControllerFindAll = (params: RequestParams = {}) =>
    this.request<Product[], any>({
      path: `/products`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerFindOne
   * @summary Retrieve a product by its ID
   * @request GET:/products/{id}
   */
  productControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<Product, void>({
      path: `/products/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerUpdate
   * @request PATCH:/products/{id}
   */
  productControllerUpdate = (id: string, data: UpdateProductDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/products/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductControllerRemove
   * @request DELETE:/products/{id}
   */
  productControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/products/${id}`,
      method: "DELETE",
      ...params,
    });
}
