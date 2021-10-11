export type pages = 'index' | 'catalog' | 'details';

export interface PagesDto {
  pageId: pages;
  pageTitle: string;
  phone: string;
}
