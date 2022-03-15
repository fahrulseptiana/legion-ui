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
  return (
    <React.Fragment>
      {label ?
        <label
          sx={sizeBox === 'lg' ?
            {
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              width: 'fit-content',
              fontFamily: 'Nunito Sans, sans-serif'
            } :
            {
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              width: 'fit-content',
              fontFamily: 'Nunito Sans, sans-serif'
            }
          }
        >
          <Component
            {...rest}
            type="checkbox"
            sx={{ ...labels, ...variants, ...sizes }}
            disabled={disabled}
          />
          <div
            sx={{
              marginLeft: '10px'
            }}
          >{label}</div>
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