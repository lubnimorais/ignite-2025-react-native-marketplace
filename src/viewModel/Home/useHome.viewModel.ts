import { useProductInfiniteQuery } from '../../shared/queries/product/use-product-infinite.query';

export function useHomeViewModel() {
  const {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useProductInfiniteQuery();

  async function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  }

  async function handleRefresh() {
    await refetch();
  }

  async function handleEndReached() {
    await handleLoadMore();
  }

  return {
    products,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    handleLoadMore,
    handleRefresh,
    handleEndReached,
  };
}
