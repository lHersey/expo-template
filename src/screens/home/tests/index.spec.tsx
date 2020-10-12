import { render } from '@testing-library/react-native';
import React from 'react';
import Providers from 'shared/providers';

import Home from '../index';

describe('<Home />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <Home />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const { queryByText } = render(
        <Providers>
          <Home />
        </Providers>,
      );

      expect(queryByText('Hello Home')).toBeTruthy();
    });
  });
});
