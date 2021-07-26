import React, { ComponentProps, FC } from 'react';

import { BaseText } from './styles';

type Props = ComponentProps<typeof BaseText> & {
  text?: string;
};

const Text: FC<Props> = props => {
  const { text, children, ...rest } = props;

  return <BaseText {...rest}>{text ?? children}</BaseText>;
};

export default Text;
