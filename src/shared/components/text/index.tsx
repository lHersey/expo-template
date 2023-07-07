import React, { ComponentProps } from 'react';

import { BaseText } from './styles';

type Props = ComponentProps<typeof BaseText> & {
  text?: string;
};

const Text = (props: Props) => {
  const { text, children, ...rest } = props;

  return <BaseText {...rest}>{text ?? children}</BaseText>;
};

export default Text;
