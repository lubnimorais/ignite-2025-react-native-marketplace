import { IProduct } from '../../../../shared/interfaces/product';

type IUseProductCardViewModelProps = {
  product: IProduct;
};

export function useProductCardViewModel({
  product,
}: IUseProductCardViewModelProps) {
  return { product };
}
