import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Product } from './schemas/products.schema';
import { RestResponseDecorator } from 'src/decorators/rest-response.decorator';
import { ProductsService } from './services/product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  /**
   * Retrieves a list of all products.
   * @returns A promise that resolves to a RestResponse containing an array of products.
   */
  @Get()
  async fetch(): Promise<RestResponse<Product[]>> {
    const products = await this.productsService.fetch();
    return RestResponseDecorator.forSuccess(products);
  }
}
