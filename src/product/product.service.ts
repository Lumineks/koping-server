import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { pages } from 'src/pages/dto/pages.dto';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findAll(page?: pages): Promise<ProductDto[]> {
    return this.productModel.find().exec();
  }
}
