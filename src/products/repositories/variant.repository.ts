import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Variant } from '../schemas/variants.schema';
import { VariantRepositoryInterface } from '../interfaces/variant.repository.interface';

@Injectable()
export class VariantRepository implements VariantRepositoryInterface {
    constructor(
        @InjectModel(Variant.name) private readonly variantsModel: Model<Variant>,
    ) { }


    async fetch(): Promise<Variant[]> {
        return await this.variantsModel.find().exec();
    }

    async findById(id): Promise<Variant> {
        return await this.variantsModel.findById(id).exec();
    }
}