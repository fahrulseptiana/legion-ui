/** @jsx jsx */

import { jsx, useThemeUI } from '@theme-ui/core'
import { get } from '@theme-ui/css'
import { Button as Component, ButtonProps as Props } from '@theme-ui/components'

export interface ButtonProps extends Props {
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  disabled?: boolean,
  size: 'lg' | 'md' | 'sm',
  variant: 'solid' | 'outline' | 'soft' | 'transparent' | 'outlineSecondary' | 'softSecondary'
}

export const Button: React.FC<ButtonProps> = ({
  iconLeft, iconRight, disabled, size = 'md', variant = 'solid', children, ...rest }: ButtonProps) => {
  const context = useThemeUI();
  const sizes = get(context.theme, `buttons.${size}`);
  const variants = get(context.theme, `buttons.${variant}`);
  return (
    <Component
      sx={{
        ...variants,
        ...sizes
      }}
      {...rest}
    >
      {
        iconLeft && size === 'lg' && <span className='wrapper-icon-left-large'>{iconLeft}</span> ||
        iconLeft && size === 'md' && <span className='wrapper-icon-left-medium'>{iconLeft}</span> ||
        iconLeft && size === 'sm' && <span className='wrapper-icon-left-small'>{iconLeft}</span>
      }
      {
        children &&
        <span className={
          iconRight && iconLeft && size ? 'wrapper-icon-both-children' : '' ||
            iconLeft && size ? 'wrapper-icon-left-children' : '' ||
              iconRight && size ? 'wrapper-icon-right-children' : ''
        }>
          {children}
        </span>
      }
      {!children && iconLeft && iconRight && size && <span className="wrapper-two-icon" />}
      {
        iconRight && size === 'lg' && <span className='wrapper-icon-right-large'>{iconRight}</span> ||
        iconRight && size === 'md' && <span className='wrapper-icon-right-medium'>{iconRight}</span> ||
        iconRight && size === 'sm' && <span className='wrapper-icon-right-small'>{iconRight}</span>
      }
    </Component>
  )
}

export default Button