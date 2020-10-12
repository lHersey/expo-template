import { render } from '@testing-library/react-native';
import React, { ComponentProps, FC } from 'react';
import Providers from 'shared/providers';

import BaseLogin from '../index';

const Login: FC<ComponentProps<typeof BaseLogin>> = props => {
  return (
    <Providers>
      <BaseLogin {...props} />
    </Providers>
  );
};

describe('<Login />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(<Login />).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const { queryByText } = render(<Login />);

      expect(queryByText('Hello Login')).toBeTruthy();
    });
  });
});
