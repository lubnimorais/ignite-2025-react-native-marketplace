import { tv, type VariantProps } from 'tailwind-variants';

export const inputVariants = tv({
  // estilização base, configurações que não vamos ser alteradas
  slots: {
    container: 'w-full my-4',
    wrapper: 'flex-row items-center border-b border-gray-200 pb-2',
    input: 'flex-1 text-base text-gray-500 bg-transparent',
    label: 'font-semibold text-xs text-gray-300 mb-3',
    error: 'text-sm text-danger mt-1',
  },
  // estilização para cada estado do input
  variants: {
    isFocused: {
      true: {
        wrapper: 'border-purple-base',
        label: 'text-purple-base',
      },
    },
    isError: {
      true: {},
    },
    isDisabled: {
      true: {},
    },
  },
  // valor default da variações
  defaultVariants: {
    isFocused: false,
    isError: false,
    isDisabled: false,
  },
});

export type IInputVariantsProps = VariantProps<typeof inputVariants>;
