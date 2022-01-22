/** @jsx jsx */

import {jsx} from '@theme-ui/core'
import {Button as Component, ButtonProps as Props} from '@theme-ui/components'

export interface ButtonProps extends Props {
  variant: 'solid' |'outline' | 'soft' | 'transparent' | 'outlineSecondary' | 'softSecondary'
}

export const Button:React.FC<ButtonProps> = ({variant='solid', children, ...rest}:ButtonProps) => (
  <Component variant={variant} {...rest}>{children}</Component>
)

export default Button