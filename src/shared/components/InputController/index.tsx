import { Control, Controller, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { IInputProps, Input } from '../Input';

type IInputControllerProps<T extends FieldValues> = Omit<
  IInputProps,
  'value' | 'onChangeText' | 'error'
> & {
  control: Control<T>;
  name: Path<T>;
  errors?: FieldErrors<T>;
};

export function InputController<T extends FieldValues>({
  control,
  name,
  errors,
  ...rest
}: IInputControllerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <Input
          isDisabled={isSubmitting || rest.isDisabled}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
}
