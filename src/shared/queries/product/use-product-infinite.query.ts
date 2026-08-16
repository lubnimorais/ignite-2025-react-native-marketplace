import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/product.service';
import { buildImageUrl } from '../../helpers/buildImagemUrl';

export function useProductInfiniteQuery() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
        });

        return response;
      } catch (error) {
        throw error;
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: 1000 * 60 * 1, // 1 minuto - tempo que o cache vai ficar válido
  });

  const products = data?.pages
    .flatMap((page) => page.data)
    .map((product) => ({
      ...product,
      photo: buildImageUrl(product.photo),
    }));

  return {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  };
}
