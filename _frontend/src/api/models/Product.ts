/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Product = {
    /**
     * The unique identifier for the product
     */
    id: string;
    /**
     * The name of the product
     */
    name: string;
    /**
     * The date and time when the product was created
     */
    createdAt: string;
    /**
     * The date and time when the product was last updated
     */
    updatedAt: string;
    /**
     * The price of the product
     */
    price: number;
    /**
     * A brief description of the product
     */
    description: string;
    /**
     * Indicates whether the product is available for purchase
     */
    available: boolean;
    /**
     * Cover image url
     */
    coverImageUrl: string;
};

