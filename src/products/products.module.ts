import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/products.schema';
import { ProductRepository } from './repositories/product.repository';
import { ProductsService } from './services/product.service';
import { ProductsController } from './products.controller';
import { VariantsController } from './variants.controller';
import { VariantsService } from './services/variant.service';
import { Variant, VariantSchema } from './schemas/variants.schema';
import { VariantRepository } from './repositories/variant.repository';


@Module({
    imports: [
      MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
      MongooseModule.forFeature([{ name: Variant.name, schema: VariantSchema}])
    ],
    providers: [
        ProductsService,
      {
        provide: 'ProductRepositoryInterface',
        useClass: ProductRepository,
      },

      VariantsService,
      {
        provide: 'VariantRepositoryInterface',
        useClass: VariantRepository
      }
    ],
    controllers: [ProductsController, VariantsController],
    exports: [ProductsService, VariantsService]
  })
  export class ProductsModule { }
  