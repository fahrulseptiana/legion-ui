/** @jsx jsx */

import React from 'react'
import { jsx, useThemeUI } from '@theme-ui/core'
import { get } from '@theme-ui/css'
import { Link as Component, LinkProps as Props } from '@theme-ui/components'

export interface LinkProps extends Props {
  disabledAncor?: boolean,
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  size?: 'sm' | 'md' | 'lg'
}

export const Anchor: React.FC<LinkProps> = ({
  disabledAncor, size = 'md', type = "a", iconLeft, iconRight, children, ...rest
}: LinkProps) => {
  const context = useThemeUI();
  const sizes = get(context.theme, `styles.a.${size}`);
  return (
    <React.Fragment>
      <Component
        {...rest}
        sx={{
          ...sizes,
          color: disabledAncor ? '#B1B5BA' : '#E42313',
          pointerEvents: disabledAncor && 'none',
        }}
      >
        {
          iconLeft && size === 'lg' && <span className='wrapper-icon-left-large'>{iconLeft}</span> ||
          iconLeft && size === 'md' && <span className='wrapper-icon-left-medium'>{iconLeft}</span> ||
          iconLeft && size === 'sm' && <span className='wrapper-icon-left-small'>{iconLeft}</span>
        }
        {children}
        {
          iconRight && size === 'lg' && <span className='wrapper-icon-right-large'>{iconRight}</span> ||
          iconRight && size === 'md' && <span className='wrapper-icon-right-medium'>{iconRight}</span> ||
          iconRight && size === 'sm' && <span className='wrapper-icon-right-small'>{iconRight}</span>
        }
      </Component>
    </React.Fragment>
  )
}

export default Anchor;