import { View } from 'react-native';
import { IProduct } from '../../../../shared/interfaces/product';
import { ProductCardView } from './ProductCard.view';
import { useProductCardViewModel } from './useProductCard.viewModel';

type IProductCardProps = {
  product: IProduct;
};

export function ProductCard({ product }: IProductCardProps) {
  const viewModel = useProductCardViewModel({ product });

  return <ProductCardView {...viewModel} />;
}
