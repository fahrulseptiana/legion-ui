/** @jsx jsx */

import React from 'react';
import { jsx } from '@theme-ui/core';
import { Text as Component, TextProps as Props } from '@theme-ui/components';

export interface TextProps extends Props {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Typography: React.FC<TextProps> = ({
  children,
  variant = 'h1',
  ...rest
}: TextProps) => {
  return (
    <React.Fragment>
      <Component {...rest}>
        {(variant === 'h1' && <h1>{children}</h1>) ||
          (variant === 'h2' && <h2>{children}</h2>) ||
          (variant === 'h3' && <h3>{children}</h3>) ||
          (variant === 'h4' && <h4>{children}</h4>) ||
          (variant === 'h5' && <h5>{children}</h5>) ||
          (variant === 'h6' && <h6>{children}</h6>)}
      </Component>
    </React.Fragment>
  );
};

export default Typography;
