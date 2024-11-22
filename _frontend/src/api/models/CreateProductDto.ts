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
     * A brief description of the product
     */
    description?: string;
    /**
     * Optional cover image file for the product
     */
    cover?: Blob;
    /**
     * The trademark of the product
     */
    tradeMark?: string;
    /**
     * The quantity of products in a package
     */
    quantityInPackage?: string;
    /**
     * The terms of sale for the product
     */
    termsOfSale?: string;
    /**
     * The country of origin of the product
     */
    countryOfOrigin?: string;
    /**
     * The release form of the product (e.g., tablet, liquid)
     */
    releaseForm?: string;
    /**
     * The ID of the category the product belongs to
     */
    categoryId: string;
};

