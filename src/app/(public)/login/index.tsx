import { LoginView } from '../../../viewModel/Login/Login.view';
import { useLoginViewModel } from '../../../viewModel/Login/useLogin.viewModel';

export default function LoginScreen() {
  const props = useLoginViewModel();

  return <LoginView {...props} />;
}
