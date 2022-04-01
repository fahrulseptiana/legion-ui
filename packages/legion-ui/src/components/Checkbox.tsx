/** @jsx jsx */

import React from 'react'
import { jsx, useThemeUI } from '@theme-ui/core'
import { get } from '@theme-ui/css'
import { Input as Component, CheckboxProps as Props } from '@theme-ui/components'

export interface CheckboxProps extends Props {
  disabled?: boolean,
  label?: '' | String,
  sizeBox?: 'lg' | 'sm' | String,
  variant?: 'check' | 'indeterminate',
}

export const Checkbox: React.FC<CheckboxProps> = ({
  disabled, label = '', variant = 'check', sizeBox = 'lg', ...rest
}: CheckboxProps) => {
  const context = useThemeUI();
  const labels = get(context.theme, `forms.checkbox.${label}`);
  const variants = get(context.theme, `forms.checkbox.${variant}`);
  const sizes = get(context.theme, `forms.checkbox.${variant}.${sizeBox}`);
  const sizeBoxLarge = get(context.theme, `forms.checkbox.sizeBoxLarge`);
  const sizeBoxSmall = get(context.theme, `forms.checkbox.sizeBoxSmall`);
  const wrappLabel = get(context.theme, `forms.checkbox.wrappLabel`);
  return (
    <React.Fragment>
      {label ?
        <label sx={sizeBox === 'lg' ? { ...sizeBoxLarge } : { ...sizeBoxSmall }}>
          <Component
            {...rest}
            type="checkbox"
            sx={{ ...labels, ...variants, ...sizes }}
            disabled={disabled}
          />
          <div sx={{ ...wrappLabel }}>{label}</div>
        </label> :
        <Component
          {...rest}
          type="checkbox"
          sx={{ ...labels, ...variants, ...sizes }}
          disabled={disabled}
        />
      }
    </React.Fragment>
  )
}

export default Checkbox;