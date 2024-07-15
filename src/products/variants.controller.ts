import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Variant } from './schemas/variants.schema';
import { RestResponseDecorator } from 'src/decorators/rest-response.decorator';
import { VariantsService } from './services/variant.service';

@Controller('products/variants')
export class VariantsController {
  constructor(private readonly variantsService: VariantsService) { }

  /**
   * Retrieves a list of all products.
   * @returns A promise that resolves to a RestResponse containing an array of products.
   */
  @Get()
  async fetch(): Promise<RestResponse<Variant[]>> {
    const products = await this.variantsService.fetch();
    return RestResponseDecorator.forSuccess(products);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<RestResponse<Variant>>  {
    const variant = await this.variantsService.findById(id);
    return RestResponseDecorator.forSuccess(variant);
  };
}
