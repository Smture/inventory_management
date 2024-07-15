import { Injectable, Inject } from '@nestjs/common';
import { Variant } from '../schemas/variants.schema';
import { VariantRepositoryInterface } from '../interfaces/variant.repository.interface';

@Injectable()
export class VariantsService {
    constructor(
        @Inject('VariantRepositoryInterface') private readonly variantRepositoryInterface: VariantRepositoryInterface
    ) { }

    async fetch(): Promise<Variant[]> {
        return await this.variantRepositoryInterface.fetch();
    }

    async findById(id) {
        return await this.variantRepositoryInterface.findById(id);
    }
}