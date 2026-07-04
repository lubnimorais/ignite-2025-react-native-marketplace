import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/auth.service";
import { IRegisterHttpParams } from "../../interfaces/http/register";

export function useRegisterMutation() {
  const mutation = useMutation({
    mutationFn: (userData: IRegisterHttpParams) =>  register(userData),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    }
  })

  return mutation
}