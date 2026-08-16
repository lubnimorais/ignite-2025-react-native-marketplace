export type IProductCategory = {
  id: number;
  name: string;
};

export type IProduct = {
  id: number;
  value: number;
  name: string;
  description: string;
  photo: string;
  height: string;
  width: string;
  averageRating: number;
  views: number;
  ratingCount: number;
  categoryId: number;
  category: IProductCategory;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};
