import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { THEME } from '../../styles/theme';

type Props = {
  children: ReactNode;
};

const Providers = (props: Props) => {
  const { children } = props;

  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default Providers;
