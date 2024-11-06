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

export interface CreateProductDto {
  /** The name of the product */
  name: string;
  /** The price of the product */
  price: number;
  /** A brief description of the product */
  description?: string;
  /**
   * Indicates whether the product is available for purchase
   * @default true
   */
  available?: boolean;
}

export interface Product {
  /** The unique identifier for the product */
  id: string;
  /** The name of the product */
  name: string;
  /**
   * The date and time when the product was created
   * @format date-time
   */
  createdAt: string;
  /**
   * The date and time when the product was last updated
   * @format date-time
   */
  updatedAt: string;
  /** The price of the product */
  price: number;
  /** A brief description of the product */
  description: string;
  /**
   * Indicates whether the product is available for purchase
   * @default true
   */
  available: boolean;
}

export type UpdateProductDto = object;
