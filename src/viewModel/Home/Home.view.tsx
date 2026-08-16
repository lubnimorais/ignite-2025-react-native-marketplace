import { FlatList, RefreshControl } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeHeader } from './components/Header';
import { Search } from './components/Search';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';

import { useHomeViewModel } from './useHome.viewModel';
import { colors } from '../../styles/colors';

export default function HomeView({
  products,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  isRefetching,
  handleEndReached,
  handleRefresh,
}: ReturnType<typeof useHomeViewModel>) {
  return (
    <SafeAreaView className="flex-1" edges={['top']}>
      <FlatList
        contentContainerClassName="px-[16px] pb-[120px]"
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item: product }) => <ProductCard product={product} />}
        onEndReached={handleEndReached}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />

            <Search />
          </>
        )}
        ListFooterComponent={() => (
          <Footer
            isLoading={hasNextPage && Boolean(isLoading || isFetchingNextPage)}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            colors={[colors['purple-base']]}
            tintColor={colors['purple-base']}
            onRefresh={handleRefresh}
          />
        }
      />
    </SafeAreaView>
  );
}
