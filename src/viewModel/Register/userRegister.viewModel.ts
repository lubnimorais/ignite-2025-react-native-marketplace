import { useForm } from "react-hook-form";

import { zodResolver} from '@hookform/resolvers/zod'

import { IRegisterFormData, registerSchema } from "./register.schema";
import { useRegisterMutation } from "../../shared/queries/auth/user-register.mutation";

export function userRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();

  const { control, handleSubmit, formState: { errors}} = useForm<IRegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    }
  })

const onSubmit = handleSubmit(async (userData) => {
  const {confirmPassword, ...registerData} = userData;

  await userRegisterMutation.mutateAsync(registerData)
})

 return {
  control,
  errors,
  onSubmit
 }
}