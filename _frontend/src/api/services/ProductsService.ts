/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductDto } from '../models/CreateProductDto';
import type { Product } from '../models/Product';
import type { ProductCategory } from '../models/ProductCategory';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Create new product
     * @param formData
     * @returns Product The product has been successfully created.
     * @throws ApiError
     */
    public static productControllerCreate(
        formData: CreateProductDto,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request.`,
            },
        });
    }
    /**
     * Retrieve all products
     * @returns Product List of all products
     * @throws ApiError
     */
    public static productControllerFindAll(): CancelablePromise<Array<Product>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
        });
    }
    /**
     * Retrieve all product categories
     * @returns ProductCategory Successfully retrieved all product categories
     * @throws ApiError
     */
    public static productControllerFindAllProductCategories(): CancelablePromise<Array<ProductCategory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/categories',
        });
    }
    /**
     * Retrieve a product by its ID
     * @param id The unique identifier of the product
     * @returns Product The product details
     * @throws ApiError
     */
    public static productControllerFindOne(
        id: string,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Product not found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static productControllerUpdate(
        id: string,
        requestBody: UpdateProductDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static productControllerRemove(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/products/{id}',
            path: {
                'id': id,
            },
        });
    }
}
