/** @jsx jsx */

import React from 'react';
import { jsx } from '@theme-ui/core';
import {
  Spinner as Component,
  SpinnerProps as Props,
} from '@theme-ui/components';

export interface SpinnerProps extends Props {
  size?: number;
  strokeWidth?: number;
  title?: String;
}

export const Loader: React.FC<SpinnerProps> = ({
  size,
  strokeWidth,
  title,
  ...rest
}: SpinnerProps) => {
  return <Component {...rest} />;
};

export default Loader;
