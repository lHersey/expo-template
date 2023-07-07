import { StatusBar } from 'expo-status-bar';
import Navigator from 'shared/navigator';
import Providers from 'shared/providers';

const App = () => {
  return (
    <Providers>
      <StatusBar style="auto" />
      <Navigator />
    </Providers>
  );
};

export default App;
