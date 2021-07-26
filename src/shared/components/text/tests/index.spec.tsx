import { render } from '@testing-library/react-native';
import React from 'react';
import Providers from 'shared/providers';

import Text from '../index';

describe('<Text />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <Text text="Hello Text" />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text by prop', () => {
      expect.hasAssertions();

      const text = 'Hello Text';
      const { queryByText } = render(
        <Providers>
          <Text text={text} />
        </Providers>,
      );

      expect(queryByText(text)).toBeTruthy();
    });

    it('should render the text by children', () => {
      expect.hasAssertions();

      const text = 'Hello Text';
      const { queryByText } = render(
        <Providers>
          <Text>{text}</Text>
        </Providers>,
      );

      expect(queryByText(text)).toBeTruthy();
    });
  });
});
