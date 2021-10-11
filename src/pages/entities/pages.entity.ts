import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { PagesDto, pages } from "../dto/pages.dto";

export type PageDocument = Page & Document;

@Schema()
export class Page implements PagesDto{
  @Prop()
  pageId: pages;

  @Prop()
  pageTitle: string;

  @Prop()
  phone: string;
}

export const PageSchema = SchemaFactory.createForClass(Page);