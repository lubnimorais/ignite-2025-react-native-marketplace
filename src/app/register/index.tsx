import { RegisterView } from "../../viewModel/Register/Register.view"
import { userRegisterViewModel } from "../../viewModel/Register/userRegister.viewModel"


export default function RegisterScreen() {
  const props = userRegisterViewModel()

  return (
    <RegisterView {...props} />
  )
}