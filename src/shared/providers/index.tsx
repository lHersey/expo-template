import { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { THEME } from '../../styles/theme';

const Providers: FC = props => {
  const { children } = props;

  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default Providers;
