import HomeView from '../../../../viewModel/Home/Home.view';
import { useHomeViewModel } from '../../../../viewModel/Home/useHome.viewModel';

export default function HomeScreen() {
  const viewModel = useHomeViewModel();

  return <HomeView {...viewModel} />;
}
