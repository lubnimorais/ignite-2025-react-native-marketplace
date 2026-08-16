export type IProductRequest = {
  pagination: {
    page: number;
    perPage: number;
  };
  filters?: {
    from: Date;
    to: Date;
    categoryIds: number[];
    searchText: string;
    minValue: number;
    mexValue: number;
  };
  sort?: {
    averageRating: string;
  };
};
