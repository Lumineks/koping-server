import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { pages } from 'src/pages/dto/pages.dto';
import { ProductDto } from '../dto/product.dto';

export type ProductDocument = Product & Document;

@Schema()
export class Product implements ProductDto {
  @Prop()
  page: pages;

  @Prop()
  title: string;

  @Prop()
  width: number;

  @Prop()
  height: number;

  @Prop()
  price: number;

  @Prop()
  imgCdnPath: string;

  @Prop()
  sliderImgPaths: string[];

  @Prop()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
