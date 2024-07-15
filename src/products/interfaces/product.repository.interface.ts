import { Product } from "../schemas/products.schema";

export interface ProductRepositoryInterface {


    /**
     * Retrieves all products.
     * @returns A promise that resolves to an array of products.
     */
    fetch(): Promise<Product[]>;
}