import { pages } from 'src/pages/dto/pages.dto';

export interface ProductDto {
  page: pages;
  title: string;
  width: number;
  height: number;
  price: number;
  imgCdnPath: string;
  sliderImgPaths: string[];
  description: string;
}
