import { RegisterView } from '../../viewModel/Register/Register.view';
import { useUserRegisterViewModel } from '../../viewModel/Register/userRegister.viewModel';

export default function RegisterScreen() {
  const props = useUserRegisterViewModel();

  return <RegisterView {...props} />;
}
