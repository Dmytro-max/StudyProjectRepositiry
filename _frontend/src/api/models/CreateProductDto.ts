/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateProductDto = {
    /**
     * The name of the product
     */
    name: string;
    /**
     * The price of the product
     */
    price: number;
    /**
     * A brief description of the product
     */
    description?: string;
    /**
     * Indicates whether the product is available for purchase
     */
    available?: boolean;
    /**
     * Optional cover image file for the product
     */
    cover?: Blob;
};

