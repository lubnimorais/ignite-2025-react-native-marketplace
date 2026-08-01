import { RegisterView } from '../../viewModel/Register/Register.view';
import { useRegisterViewModel } from '../../viewModel/Register/useRegister.viewModel';

export default function RegisterScreen() {
  const props = useRegisterViewModel();

  return <RegisterView {...props} />;
}
