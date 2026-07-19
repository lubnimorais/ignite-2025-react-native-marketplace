import { RegisterView } from '../../viewModel/Register/Register.view';
import { useRegisterViewModel } from '../../viewModel/Register/userRegister.viewModel';

export default function RegisterScreen() {
  const props = useRegisterViewModel();

  return <RegisterView {...props} />;
}
