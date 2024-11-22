/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductCategory } from './ProductCategory';
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
     * A brief description of the product
     */
    description: string | null;
    /**
     * Cover image URL of the product
     */
    coverImageUrl: string | null;
    /**
     * The trade mark of the product
     */
    tradeMark: string | null;
    /**
     * The quantity of the product in a package
     */
    quantityInPackage: string | null;
    /**
     * The terms of sale for the product
     */
    termsOfSale: string | null;
    /**
     * The country where the product originated
     */
    countryOfOrigin: string | null;
    /**
     * The release form of the product
     */
    releaseForm: string | null;
    /**
     * The ID of the category the product belongs to
     */
    categoryId: string;
    /**
     * The category the product belongs to
     */
    category: ProductCategory | null;
};

