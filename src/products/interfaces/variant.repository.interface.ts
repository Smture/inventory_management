import { Variant } from "../schemas/variants.schema";

export interface VariantRepositoryInterface {

    /**
     * Retrieves all products.
     * @returns A promise that resolves to an array of Variants.
     */
    fetch(): Promise<Variant[]>;


    findById(id): Promise<Variant>;
}