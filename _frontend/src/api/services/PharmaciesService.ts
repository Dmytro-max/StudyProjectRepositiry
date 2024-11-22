/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pharmacy } from '../models/Pharmacy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PharmaciesService {
    /**
     * Retrieve a list of all pharmacies
     * @returns Pharmacy The list of pharmacies was successfully retrieved.
     * @throws ApiError
     */
    public static pharmacyControllerFindAllPharmacies(): CancelablePromise<Array<Pharmacy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pharmacies',
        });
    }
}
