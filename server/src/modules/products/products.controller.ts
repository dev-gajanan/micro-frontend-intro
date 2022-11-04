import { Controller, Get, Param } from '@nestjs/common';
import { Product, products } from 'src/interfaces/products';

@Controller('products')
export class ProductController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Product> {
    //console.log(id);
    return products.find((product) => product.id == parseInt(id));
  }
}
 