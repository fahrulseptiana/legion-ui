/** @jsx jsx */

import {jsx} from '@theme-ui/core'
import {Button as Component, ButtonProps as Props} from '@theme-ui/components'

export interface ButtonProps extends Props {}

export const Button:React.FC<ButtonProps> = ({children, ...rest}:ButtonProps) => (
  <Component {...rest}>{children}</Component>
)

export default Button