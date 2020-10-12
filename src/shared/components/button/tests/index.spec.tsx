import { render } from '@testing-library/react-native';
import React, { ComponentProps, FC } from 'react';
import Providers from 'shared/providers';

import BaseButton from '../index';

const Button: FC<ComponentProps<typeof BaseButton>> = props => {
  return (
    <Providers>
      <BaseButton {...props} />
    </Providers>
  );
};

describe('<Button />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(<Button />).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const { getByText } = render(<Button />);

      expect(getByText('Hello Button')).toBeTruthy();
    });
  });
});
