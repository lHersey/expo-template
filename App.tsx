import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import Navigator from 'shared/navigator';
import Providers from 'shared/providers';

const App: FC = () => {
  return (
    <Providers>
      <StatusBar style="auto" />
      <Navigator />
    </Providers>
  );
};

export default App;
